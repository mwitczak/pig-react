export default function(containerWidth) {
  if (containerWidth <= 720) return 400;
  if (containerWidth < 1366) return 600;
  return 840;
}
