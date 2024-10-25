"use client";
import glossary from "../public/glossary.json";

export const GlossaryRender = () => {
  function toTitleCase(str: string) {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1);
    });
  }

  const toId = (str: string) => {
    return str
      .replace(/[^a-zA-Z ]/g, "")
      .toLowerCase()
      .replaceAll(" ", "-");
  };
  // console.log('Found', Object.keys(glossary).length, 'Word/Meanings.')

  return Object.entries(glossary).map(([word, meaning]) => {
    return (
      <div className="word" data-word={word} key={word}>
        <a
          href={"#" + toId(word)}
          id={toId(word)}
          className="subheading-anchor"
          style={{ textDecoration: "none" }}
          aria-label="Permalink for this section"
        >
          <h3 className="nx-font-semibold nx-tracking-tight nx-text-slate-900 dark:nx-text-slate-100 nx-mt-8 nx-text-2xl">
            {toTitleCase(word)}
          </h3>
        </a>
        <p className="nx-mt-6 nx-leading-7">
          {meaning.slice(0, 1).toUpperCase()}
          {meaning.slice(1)}
        </p>
      </div>
    );
  });
};

export const GlossaryComp = () => {
  function data(e) {
    let searchVal = e.target.value;
    let words = document.getElementsByClassName("word");

    if (searchVal.trim() != "") {
      for (var i = 0; i < words.length; i++) {
        let word = words[i];
        let wordVal = word.getAttribute("data-word");

        if (
          wordVal.toLowerCase().includes(searchVal.trim().toLowerCase()) == true
        ) {
          word.style.display = "block";
        } else {
          word.style.display = "none";
        }
      }
    } else {
      for (var i = 0; i < words.length; i++) {
        let word = words[i];
        word.style.display = "block";
      }
    }
  }

  return (
    <>
      <br />
      <input
        type="text"
        placeholder="Search Glossary"
        style={{ width: "300px" }}
        onChange={data}
        className="flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-sm text-foreground transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
      />
      <GlossaryRender />
    </>
  );
};
