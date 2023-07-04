<script>
    import { fly, fade, slide } from "svelte/transition";
    import { items } from "../Answers/answersData";
	import { quartInOut } from "svelte/easing";
    
    $: active = items[0];
    $: width = 0;
    
    $:vertical = (width < 1180) ? true : false;
</script>

<div class="panel-container" bind:clientWidth={width}>
    {#if vertical}
        <div class="panel-v">
            {#each items as item, i}
                <button class="text-left"
                class:open={active.question === item.question}
                on:click={() => active = items[i]}>
                    <span class="num">{i + 1}.</span><span>{@html item.question}</span>
                    <span class="caret">
                        <svg xmlns="http://www.w3.org/2000/svg"  width="20" height="20" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" viewBox="0 0 24 24" 
                        stroke="currentColor">
                            <path d="M9 5l7 7-7 7"/>
                        </svg>
                    </span>
                </button>
                {#if active.question === item.question}
                    <div class="pane border-blue bg-dark div-block" transition:slide={{duration: 700, easing: quartInOut}}>
                        <svelte:component this={active.component}/>
                    </div>  
                {/if}
            {/each}
        </div>
{:else}
    <div class="panel-h">
        {#each items as item, i}
            <div class="question-area">
                <button class="text-left"
                class:open={active.question === item.question}
                on:click={() => active = items[i]}>
                    <span class="num">{i + 1}.</span><span style="display: flex; flex:1;">{@html item.question}</span>
                    <span class="arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 -960 960 960" width="40"
                        fill="currentColor">
                            <path d="M527.348-256.898q-12.638-13.015-12.66-31.442-.022-18.428 12.326-30.776l118.522-118.145H190.884q-18.667 0-31.37-12.703t-12.703-31.369q0-18.667 12.703-31.37t31.37-12.703h454.652L526.014-644.928q-12.638-12.637-12.304-30.565.333-17.928 12.971-30.942 13.014-12.348 31.37-12.348 18.355 0 30.703 12.348l193.667 194.232q6.652 6.652 9.949 14.485 3.297 7.834 3.297 16.385 0 8.55-3.297 16.384-3.297 7.833-9.949 14.485L589.087-256.565q-12.87 12.87-30.797 12.587-17.928-.282-30.942-12.92Z"/>
                        </svg>
                    </span>
                </button>
            </div>
        {/each}
        {#key active.component}
            <div class="answer-area"
            in:fade|local
            out:fly|local={{y:200, duration: 600}}>
                <h3 class="title" in:fly={{x: 200}} out:fade|local>{@html active.question}</h3>
                <div class="pane border-blue bg-dark div-block">
                    <svelte:component this={active.component}/>
                </div>
            </div>
        {/key}
    </div>
{/if}
</div>
<style>
    .panel-container{
        padding-block: 0.5em;
        padding-inline: 1em;
        overflow: hidden;
    }
    .panel-h{
        display: grid;
        position: relative;
    
        column-gap: 2em;
        row-gap: 1em;
        grid-template-columns: 1fr 1fr;
        justify-self: stretch;
    }
    .panel-v{
        display: grid;
        position: relative;
        gap: 0.75em;
        justify-self: stretch;
        grid-template-columns: 1fr;
    }
    .question-area{
        grid-column: 1 / 2; 
    }
    .answer-area{
        grid-area: 1 / 2 / -2 / -1;

        position:absolute;
        grid-column: 2 / 3;
    }
    .num{
        font-size: 1.1em;
        padding-right: .5em;
    }
    svg{
        min-width: 1.5em;
        width: 1.5em;
        height: auto;
    }
    button{
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border: none;
        border-radius: 2em;
        padding-inline: .75em;
        height: 2em;
        width: 100%;
        /* Color */
        color: var(--color-disabled);
        background-color: var(--color-dark);
        box-shadow: 0 0 0 .15rem var(--color-dark);

        /* Transition */
        transition: all .3s ease;
    }
    button.open, button:hover.open{
        background-color: var(--color-blue);
        color: white;
        box-shadow: 0 0 0 .2rem var(--color-blue);
    }
    button:hover{
        color: var(--color-lighter);  
        box-shadow: 0 0 0 .15rem var(--color-disabled);
    }
    button:focus{
        color: white;
        
    }
    .caret{
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
        transform: rotate(0deg);
        opacity: 0.5;
        transition: all .2s linear;
    }
    button.open .caret{
        transform: rotate(90deg);
        opacity: 1;
        transition: transform 0.2s ease;
    }
    .arrow{
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
        opacity: 0;
        transform: translate3d(-2em, 0, 0);
        transition: all .3s ease;
    }
    
    button:hover .arrow{
        transform: translate3d(-1.5em, 0, 0);
        opacity: .5;
        transition: all .2s ease-out;
    }
    button.open .arrow{
        transform: translate3d(0, 0, 0);
        opacity: 1;
        transition: all 0.2s ease;
    }
    .title{
        font-size: 1.4rem;
        color: var(--color-blue);
        
        text-transform: uppercase;
    }
    @media (max-width: 900px){
        .panel-container{
            padding-inline: 0;
            overflow: unset;
        }
        button{
            height: 3em;
            
            text-align: center;
        }
        .panel-v{
            gap:1em;
        }
    }
</style>