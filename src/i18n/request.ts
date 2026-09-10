import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale;

  return {
    locale: locale ?? "tr",
    messages: (await import(`./messages/${locale ?? "tr"}.json`)).default,
  };
});