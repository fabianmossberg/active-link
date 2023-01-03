import { page } from '$app/stores';

export const activeLink = (node: HTMLElement) => {
    const links = node.querySelectorAll('a');

    const unsubscribe = page.subscribe(({ url }) => {
        const currentPath = url.pathname || '/';

        links.forEach((element: HTMLAnchorElement) => {
            const href = element.getAttribute('href') || '/';
            const hrefParts = href.split('/')
            const currentPathParts = currentPath.split('/')

            // This link should be ignored because it has the data-never-change attribute.
            const shouldBeIgnored = element.getAttribute('data-never-active') === '';

            // This link is a descendant of the current page.
            const isDescendant = currentPathParts.every((part, partIndex) => hrefParts[partIndex] === part);
            
            // This link is an ancestor of the current page.
            const isAncestor = hrefParts.every((part, partIndex) => currentPathParts[partIndex] === part);

            // This is the active page.
            const isActive = href === currentPath;

            if (shouldBeIgnored) {
                delete element.dataset.active; // Delete the active attribute if it exists.
            }
            else if (isActive) {
                element.dataset.active = 'active';
            } else if (isAncestor) {
                element.dataset.active = 'ancestor';
            } else if (isDescendant) {
                element.dataset.active = 'descendant'
            }
            else {
                delete element.dataset.active
            }
        })
    });
    return {
        destroy() {
            unsubscribe();
        }
    }

}