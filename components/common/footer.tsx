export default function Footer() {
  return (
    <footer className="border-t bg-muted/20 py-12">
  <div className="max-w-7xl mx-auto px-4 text-center">
    <p className="text-sm text-muted-foreground">
      © {new Date().getFullYear()} iBuiltThis by Azharuddin Ali. All rights reserved.
    </p>
  </div>
</footer>
  );
}
