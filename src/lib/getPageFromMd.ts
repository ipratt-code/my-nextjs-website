import type { Page } from "$lib/types";

/**
 * Takes in a glob import of pages and returns an array of pages.
 * @param imports An array of globs to import.
 * @returns A promise for an array of pages.
 */
export const getPagesFromMd = async (
    imports: Record<any, () => Promise<any>>
) => {
    let pages: Page[] = [];

    for (const [path, importFn] of Object.entries(imports)) {
        const page = await importFn();

        pages.push({
            render: page.default,
            data: {
                path: path.split("/")[path.split("/").length - 2],
            },
            metadata: page.metadata,
            frontmatter: page.metadata,
            slug: path.split("/")[path.split("/").length - 1].slice(0, -3),
        });
    }

    return pages;
};