<script lang="ts">
    import { slide, fade } from "svelte/transition";
    import {quartOut} from 'svelte/easing';
    let hovering = false;

    function enter() {
        hovering = true;
    }

    function leave() {
        hovering = false;
    }
    
    export let img_src:string;
    export let name:string;
    export let role:string;
    
    export let likes:string;
    export let dislikes:string;
    export let riding_since:string;
    export let fav_trail:string;
    export let why:string;

    export const question_response=[
        {question:"Bike Likes", response:likes},
        {question:"Bike Dislikes", response:dislikes},
        {question:"Riding MTB since", response:riding_since},
        {question:"Favorite Trail", response:fav_trail},
        {question:"Why I got involved", response:why},
    ];

</script>

<div class="card bg-dark border-blue" on:mouseenter={enter} on:mouseleave={leave} class:hovering>
    <slot {hovering}/>
    <div class="coach-pic" >
        <img src={img_src} alt={img_src}/>
    </div>
    <span id="name">{name}</span>
    <span id="role">{role}</span>
    {#each question_response as {question, response}}
        <span class="section">{question}<hr></span>
        {#if hovering}
            <span transition:fade|local={{duration:300}}>
                <p transition:slide|local={{duration:300, easing:quartOut}}>{response}</p>
            </span>
        {/if}
    {/each}
</div>

<div class="box"></div>
<style>
    .card{
        display: flex;
        flex-direction: column;
        padding: .5em;
        width: 300px;
        text-align: center;
        transition: all 0.3s ease-in-out;
    }
    #name{
        color: var(--color-light);
        text-align: center;
        transition: color .3s ease;
        font-weight: bold;
    }
    #role{
        color: var(--color-blue);
        text-align: center;
        font-weight: bolder;
    }
    .card p {
        font-size: smaller;
        text-align: left;
        color: var(--color-disabled);
    }
    /* Image zoom */
    .coach-pic{
        height: 200px;
        overflow: hidden;
        border-radius: .5em;
    }
    .coach-pic img{
        width: 250px;
        filter:grayscale(.9);
        transform: translate3d(10px, 80px, 0) scale(1.6);
        transition: all .3s ease-in-out;
    }
    .card:hover img{
        filter:grayscale(0);
        transform: translate3d(10px, 15px, 0) scale(1.2);
    }
    .card:hover hr {
        background:var(--color-blue);
        
    }
    .card:hover{
        transform: scale(1.05);
    }
    .card:hover .section{
        color:var(--color-light);
    }
    .card:hover #name{
        color: var(--color-lighter);
    }
    .section{
        display: flex;
        color: var(--color-disabled);
        flex: 0;
        align-items: center;
        justify-content: space-between;
        transition: all .3s ease;
    }
    .section > hr {
        height: 1px;
        border-style: none;
        background: var(--color-darker);
        margin:0;
        flex: 1;
    }
</style>