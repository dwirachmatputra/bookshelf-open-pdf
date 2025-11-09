const { Plugin, Notice, TFile, parseLinktext } = require("obsidian");

module.exports = class BookshelfOpenPDF extends Plugin {
  async onload() {
    console.log("Bookshelf Open PDF loaded!"); 

    this.registerDomEvent(document, "click", async (evt) => {
      const icon = evt.target.closest(".bookshelf--icon-module--clickable--yaiyM");
      if (!icon) return; 
      evt.preventDefault();
      evt.stopImmediatePropagation();

      try {
        const activeFile = this.app.workspace.getActiveFile();
        if (!activeFile) {
          new Notice("No active file found.");
          return;
        }

        const mdCache = this.app.metadataCache.getFileCache(activeFile);
        const pdfField = mdCache?.frontmatter?.pdf;

        if (!pdfField) {
          new Notice("No 'pdf' field found in frontmatter.");
          return;
        }
        
        const cleaned = pdfField.replace(/\[\[|\]\]/g, "").trim();
        const { path } = parseLinktext(cleaned);
        const pdfFile = this.app.metadataCache.getFirstLinkpathDest(path, activeFile.path);

        if (!(pdfFile instanceof TFile)) {
          new Notice(`PDF not found: ${path}`); 
          return;
        }
       
        const leaves = this.app.workspace.getLeavesOfType("markdown");
        for (const leaf of leaves) {
          if (leaf.view.file?.path === activeFile.path) {
            this.app.workspace.detachLeavesOfType("markdown");
            break;
          }
        }

        await this.app.workspace.openLinkText(pdfFile.path, "", true);

        new Notice(`Opening PDF: ${pdfFile.path}`);
      } catch (err) {
        console.error("Error while opening PDF:", err);
        new Notice("Failed to open the PDF file.");
      }
    });
  }

  onunload() {
    console.log("Bookshelf Open PDF unloaded");
  }
};
