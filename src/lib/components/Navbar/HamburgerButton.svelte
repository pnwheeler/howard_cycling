<script>
    export let open = false;
    export let onClick = () => {
        open = !open;
    }
    export let ariaLabel = 'menu toggle'
    export let width = 100;
</script>
<button class="btn" on:click={onClick} aria-expanded={open} aria-label={ariaLabel}>
    <rect {width} height="100"/>
    <svg class:open
        {width}
        viewBox="0 0 100 100"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        stroke-width= "8"
        stroke-linecap="round"
        stroke-linejoin="round">
        <path
            d="M 20,25 H 80 L 20,75"
            class="top"
        />
        <path
            d="M 20,50 H 80"
            
            class="middle" 
        />
        <path
            d="M 20,75 H 80 L 20,25" 
            class="bottom"
        />
    </svg>
</button>
<style>
.btn{
    margin: 0;
    padding: 0;
    background-color: transparent;
    border:none;
    cursor: pointer;
}
.top{
    color: rgb(141, 141, 141);
    stroke-dasharray: 59 139;
    transition: 
        stroke-dasharray .2s .3s ease,
        stroke-dashoffset .2s .2s ease,
        stroke-width .2s .3s ease,
        color .2s .3s ease;
}
.middle{
    color: rgb(107, 107, 107);
    stroke-dasharray: 49 60;
    stroke-dashoffset: -10;
    transition:
        stroke-dasharray .2s .3s ease,
        stroke-dashoffset .1s .1s ease,
        color .2s .3s ease;
}
.bottom{
    color: rgb(70, 70, 70);
    stroke-dasharray: 59 139;
    transition:
        stroke-dasharray .3s .1s ease,
        stroke-dashoffset .2s .1s ease,
        stroke-width .2s .3s ease,
        color .2s .1s ease;
}
.open .top{
    stroke-width: 11;
    stroke-dasharray: 57 70;
    stroke-dashoffset: -70;
    color: var(--color-blue);
}
.open .middle{
    stroke-dasharray: 1 60;
    stroke-dashoffset: -30;
    color: transparent;
}
.open .bottom{
    stroke-width: 11;
    stroke-dasharray: 57 70;
    stroke-dashoffset: -70;
    color: var(--color-blue);
}
</style>