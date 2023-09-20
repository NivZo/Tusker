<script lang="ts">
    import "./ContextMenuWrapper.scss";
    import type { ContextMenuItem } from "../../types/ContextMenuTypes";
    import type { Nullable } from "../../types/UtilTypes";
    import { guiOptions } from "../../stores/GUIOptionsStore";

    type Dimensions = {
        h: number,
        w: number,
    };

    export let menuItems: ContextMenuItem[] = [];

    let wrapper: HTMLElement;
    let menuPosition = { x: 0, y: 0 }
    let menuDimensions: Dimensions = { h: 0, w: 0 }
    let browserDimensions: Dimensions = { h: 0, w: 0 }
    let showMenu: boolean = false;
    $: guiOptions.updateContextMenu(showMenu);

    let rightClickContextMenu = (e: MouseEvent) => {
        showMenu = true
        browserDimensions = {
            w: window.innerWidth,
            h: window.innerHeight
        };
        menuPosition = {
            x: e.clientX + document.documentElement.scrollLeft,
            y: e.clientY + document.documentElement.scrollTop,
        };

        if (browserDimensions.h -  menuPosition.y < menuDimensions.h)
            menuPosition.y = menuPosition.y - menuDimensions.h
        if (browserDimensions.w -  menuPosition.x < menuDimensions.w)
            menuPosition.x = menuPosition.x - menuDimensions.w
    };

    let isTargetInWrapperChildren = (target: Nullable<EventTarget>): boolean => {
        // Only checking first child becuase its <slot/>
        if (wrapper.children[0] == target) {
            return true;
        } else {
            if (wrapper.children[0]?.children?.length) {
                return [...wrapper.children[0].children].some(child => child == target);
            }
        }
        return false;
    }

    let closeContextMenuOnRightClick = (e: MouseEvent) => {
        if (wrapper?.children?.length == 1) {
            showMenu = isTargetInWrapperChildren(e.target);
        } else {
            showMenu = false;
        }
    }

    let closeContextMenuOnLeftClick = () => {
        showMenu = false;
    }

    let getContextMenuDimension = (node: HTMLElement) => {
        menuDimensions = {
            h: node.offsetHeight,
            w: node.offsetWidth
        }
    }

</script>

{#if showMenu}
<nav use:getContextMenuDimension style="top:{menuPosition.y}px; left:{menuPosition.x}px">
    <div class="navbar" id="navbar">
        <ul>
            {#each menuItems as item}
                <li><button on:click={event => {
                    item.onClick();
                    event.stopPropagation();
                    closeContextMenuOnLeftClick();
                }}>
                    <span class="context-menu-li-icon">{item.icon ? item.icon : ""}</span>
                    <span class="context-menu-li-text">{item.displayText}</span>
                </button></li>
            {/each}
        </ul>
    </div>
</nav>
{/if}

<svelte:window 
    on:click={closeContextMenuOnLeftClick}
    on:contextmenu={closeContextMenuOnRightClick} />
<!-- svelte-ignore a11y-no-static-element-interactions -->
<span
    bind:this={wrapper}
    on:contextmenu|preventDefault={rightClickContextMenu}>
    <slot/>
</span>


