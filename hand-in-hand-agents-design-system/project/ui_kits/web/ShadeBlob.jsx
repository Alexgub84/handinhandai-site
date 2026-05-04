// ShadeBlob — the signature 1267px atmospheric pad behind hero sections
function ShadeBlob({ top = -531, left = 88, opacity = 1, size = 1267, height }) {
  return (
    <div className="hiha-shade" aria-hidden style={{
      top, left, width: size, height: height ?? size, opacity,
    }} />
  );
}
Object.assign(window, { ShadeBlob });
