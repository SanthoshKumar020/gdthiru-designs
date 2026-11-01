"use client";

// Image that hides itself if the remote host fails, so a broken image never
// shows a broken-image icon inside a client-facing design.
export default function SafeImg(props) {
  return (
    <img
      {...props}
      onError={(e) => {
        e.currentTarget.style.display = "none";
      }}
    />
  );
}
