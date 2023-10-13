/**
 * ビューポートのサイズを取得する
 */
export const viewportSize = () => {
  const vw = window.innerWidth * 0.01;
  const vh = window.innerHeight * 0.01;

  document.documentElement.style.setProperty("--vw", `${vw}px`);
  document.documentElement.style.setProperty("--vh", `${vh}px`);
};

export const viewportSizeSp = () => {
  const vhSp = window.innerHeight * 0.01;

  document.documentElement.style.setProperty("--vh-sp", `${vhSp}px`);
};
