<template>
    <div @scroll="changeBackground" class="main-container">
        <Nav v-on:click.native="scroll"/>
        <MainSection/>
        <ProjectsSection/>
        <Title text="تواصل معي"/>
        <ContactMe/>
    </div>
</template>

<script>

    export default {
        name: "app",
        methods: {
            scroll: function (e) {
                const clickedItemId = e.target.parentElement.dataset.id;
                console.log(clickedItemId);
                switch (clickedItemId) {
                    case 'home':
                        this.$children[1].$el.scrollIntoView();
                        break;
                    case 'projects':
                        this.$children[2].$el.scrollIntoView();
                        break;
                    case 'contactMe':
                        this.$children[3].$el.scrollIntoView();
                        break;
                }

            },
            changeBackground: function (e) {
                const clickedItemId = e.target.parentElement.dataset.id;
                console.log(clickedItemId);
                switch (clickedItemId) {
                    case 'home':
                        this.$children[1].$el.scrollIntoView();
                        break;
                    case 'projects':
                        this.$children[2].$el.scrollIntoView();
                        break;
                    case 'contactMe':
                        this.$children[3].$el.scrollIntoView();
                        break;
                }

            }

        }
    };
</script>

<style>
    * {
        direction: rtl;
        text-align: right;
        list-style: none;
        scroll-behavior: smooth;
    }

    .main-container {
        overflow: hidden;
        background: linear-gradient(270deg, #007bff, #17a2b8, #1048e7);
        background-size: 600% 600%;

        -webkit-animation: animation 36s ease infinite;
        -moz-animation: animation 36s ease infinite;
        animation: animation 36s ease infinite;
    }

    @-webkit-keyframes animation {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }

    @-moz-keyframes animation {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }

    @keyframes animation {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }
</style>
