export const convertCountsToArray = (obj: Record<string, unknown>) => {
  return Object.entries(obj)
    .filter(([key]) => key.endsWith("_prompts"))
    .map(([key, value]) => ({
      name: key.replace("_prompts", ""),
      value,
    }));
};

export const formatLabel = (name: string) => {
  return name
    .toLowerCase()
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};
