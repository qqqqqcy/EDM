const importAll = (requireContext: any) =>
  requireContext.keys().forEach(requireContext);
try {
  importAll((require as any).context("./", true, /\.svg$/));
} catch (error) {}

export default importAll;
