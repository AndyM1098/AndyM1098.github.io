//This component will render a basic key value link element.
//      Key --> Github:
//      Element --> Link to github
//      Returned as Github: Link

interface LinkElementsProp {
    name: string;
    link_name: string;
    link_href: string;
}

function LinkElement({ name, link_name, link_href}: LinkElementsProp) {
    if (!link_href) return null;
    return (
    <>
      <p>
        {name}:{" "}
        <a
          className="link-offset-2-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
          href={link_href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {link_name}
        </a>
      </p>
    </>
  );
}

export default LinkElement;
