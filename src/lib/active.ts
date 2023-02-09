type activeLinkOptions = {
    prefix?: string;
    ACTIVE?: string;
    ANCESTOR?: string;
    TOP_LEVEL?: string;
    CURRENT?: string;
    DESCENDANT?: string;
}

import { getStores } from '$app/stores';
const { page } = getStores();

export const activeLink = (node: HTMLAnchorElement | HTMLElement, options:activeLinkOptions = {}) => {

    const defaultsOptions:activeLinkOptions = { prefix: '', ACTIVE: 'active', CURRENT: 'current', ANCESTOR: 'ancestor', DESCENDANT: 'descendant', TOP_LEVEL: 'top-level' }
    const { prefix, CURRENT, ANCESTOR, TOP_LEVEL, ACTIVE, DESCENDANT } = Object.assign({}, defaultsOptions, options);

    const stringWithPrefix = (string: string) => prefix ? `${prefix}-${string}` : string;    
    const availableClasses = [CURRENT, ANCESTOR, ACTIVE, DESCENDANT, TOP_LEVEL].map(x => x.split(' ')).flat().filter(Boolean);

    const unsubscribe = page.subscribe(({ url }) => {
        const links = node instanceof HTMLAnchorElement ? [node] : node.querySelectorAll('a');
        links.forEach((element: HTMLAnchorElement) => {
            
            const href = element.getAttribute('href') || '/';
            const hrefParts = href.split('/')
            
            const currentPath = url.pathname || '/';
            const currentPathParts = currentPath.split('/')
            
            // This link should be ignored because it has the data-never-change attribute.
            const shouldBeIgnored = element.getAttribute('data-active-link-ignore');
            
            // This link is a descendant of the current page.
            const isDescendant = currentPathParts.every((part, partIndex) => hrefParts[partIndex] === part) && hrefParts.length > currentPathParts.length;

            // This link is an ancestor of the current page.
            const isAncestor = hrefParts.every((part, partIndex) => currentPathParts[partIndex] === part) && hrefParts.length < currentPathParts.length;
            const isActive = href === currentPath

            const isTopLevel = hrefParts.length === 2;
            const addClasses = () => {
                const newClasses = [];
                isActive && newClasses.push(ACTIVE)
                isAncestor && newClasses.push(ANCESTOR)
                isDescendant && newClasses.push(DESCENDANT);
                isTopLevel && newClasses.push(TOP_LEVEL);
                (isActive || isAncestor || isDescendant) && newClasses.push(CURRENT);
                return newClasses.map(x => x.split(' ')).flat().filter(Boolean)
            }
            if(!shouldBeIgnored){
                element.classList.remove(...availableClasses.map(stringWithPrefix));
                element.classList.add(...addClasses().map(stringWithPrefix));
            }
        })
    });
    return {
        destroy() {
            unsubscribe();
        }
    }
}