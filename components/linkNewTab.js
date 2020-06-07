export default function LinkNewTab({href, children}) {
  return (
      <a href={href} target="_blank">{children}</a>
  );
}
