bookshelf-open-pdf
---

additional custom for bookshelf obsidian plugin.

So, if you notice when you use Bookshelf Plugin that there is no direct way to open your pdf file in Bookshelf library tab. If you click button link in book details pop up, it will open your-book.md file, not the pdf file. You need to setup ``[[yourPdfName]]`` or ``![[yourPdfName]]``first in order to open your pdf file or searching the file on your directory to find the book manually.

If you want to save your time and open your pdf file directly when you click book's details link icon.  
You might interested custom obsidian plugin for this feature.
This plugin helps you open the PDF file when you click link button. 

---
## Prerequisite

1. Have node.js installed in your computer.
2. Already have [bookshelf plugin](https://obsidian.md/plugins?id=bookshelf) in Obsidian

---
## Installation
1. Run `npm -v` in CMD if there is no error message then we go to next step.
2. Download the latest release (`.zip`) from the [Releases](https://github.com/dwirachmatputra/bookshelf-open-pdf/releases/tag/v.0.1.0) section.
3. Extract file.
4. Put extracted file inside your obsidian vault that already installed plugin bookshelf with path
	  ` .obsidian\plugins\(put here)`
5. Make sure you in the directory  
	`..your-obsidian-vault\.obsidian\plugins\bookshelf-open-pdf`
6. Run `npm install` using cmd.
7. If there is no error then run `npm run build` and make sure there is no error.
8. After everything ok, then go to setting > community plugins > find Obsidian Open PDF > turn on.
9. Close app, then open app again.
10. The plugin should be running now.
---
## Usage

After installation:

in your-book.md that you import the info from browser extension, then you should see in your book .md format like this on Obsidian:

```
---
cover: 'https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1598823299i/42844155.jpg'
author:
    - '[[J.K. Rowling]]'
published: 1997-06-26
tags:
    - fantasy
    - fiction
    - young-adult
    - harry-potter
    - magic
    - childrens
    - audiobook
rating: 4.47
pages: 333
lists:
comment:
pdf: input your pdf here
---

# Harry Potter and the Philosopher’s Stone
```

Now change pdf using your local PDF file,  
`pdf : [harry potter.pdf]`

Now try open bookshelf library tab on left menu in obsidian and click the book that you already set the PDF and then try to click small icon next to the tittle on book details pop up.
