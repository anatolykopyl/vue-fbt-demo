import fbt from "fbt"

export const useI18n = () => {
  const documentationHeading = fbt("Documentation", "Documentation heading")

  return {documentationHeading}
}
