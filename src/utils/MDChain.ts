class MDChain {
  private md: string = "";

  private appendToMD(text: string) {
    this.md += text;
  }

  addTitle(title: string, type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6") {
    let t = "";
    switch (type) {
      case "h1":
        t = "#";
        break;
      case "h2":
        t = "##";
        break;
      case "h3":
        t = "###";
        break;
      case "h4":
        t = "####";
        break;
      case "h5":
        t = "#####";
        break;
      case "h6":
        t = "######";
        break;
      default:
        t = "#";
        break;
    }
    t += ` ${title}  \n\n`;
    this.appendToMD(t);
    return this;
  }

  addParagraph(text: string) {
    let t = `${text}`;
    t = t.replaceAll("\n", "  \n");
    t += "  \n\n";
    this.appendToMD(t);
    return this;
  }

  addLineBreak() {
    let t = `  \n`;
    this.appendToMD(t);
    return this;
  }

  addText(text: string) {
    let t = `${text}`;
    this.appendToMD(t);
    return this;
  }

  addBoldText(text: string) {
    let t = `**${text}**`;
    this.appendToMD(t);
    return this;
  }

  addItalicText(text: string) {
    let t = `*${text}*`;
    this.appendToMD(t);
    return this;
  }

  addBoldItalicText(text: string) {
    let t = `***${text}***`;
    this.appendToMD(t);
    return this;
  }

  addBlockquote(text: string) {
    let t = `> ${text}`;
    t = t.replaceAll("\n", "  \n> ");
    t += "  \n\n";
    this.appendToMD(t);
    return this;
  }

  addCode(text: string) {
    let t = `\`${text}\`  `;
    this.appendToMD(t);
    return this;
  }

  addCodeBlock(text: string, language?: string) {
    let t = `\`\`\`${language || ""}\n${text}\n\`\`\`  \n\n`;
    this.appendToMD(t);
    return this;
  }

  addUnorderedList(items: string[]) {
    let t = "";
    items.forEach((item) => {
      t += `- ${item}  \n`;
    });
    this.appendToMD(t);
    return this;
  }

  addOrderedList(items: string[]) {
    let t = "";
    items.forEach((item, i) => {
      t += `${i + 1}. ${item}  \n`;
    });
    this.appendToMD(t);
    return this;
  }

  addLink(url: string, text?: string) {
    let t = "";
    if (text) {
      t = `[${text}](${url})`;
    } else {
      t = `<${url}>`;
    }
    this.appendToMD(t);
    return this;
  }

  clear() {
    this.md = "";
    return this;
  }

  render() {
    return this.md;
  }
}

export default MDChain;
