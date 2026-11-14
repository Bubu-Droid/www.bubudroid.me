const root = document.documentElement;

// theme toggle
document.querySelector(".theme-toggle").onclick = () => {
  root.dataset.theme = root.dataset.theme === "night" ? "day" : "night";
  try {
    localStorage.setItem("theme", root.dataset.theme);
  } catch {}
};

// Set up dynamic email link so that
// dumb bots can't scrape my mail
const emailLink = document.getElementById("email-link");
if (emailLink) {
  const user = "bubu";
  const domain = "bubudroid.me";
  emailLink.href = `mailto:${user}@${domain}`;
}
