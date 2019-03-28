<template>
    <b-col lg="12" class="pt-5">
        <b-row>
            <b-col md="10" class="mx-auto">
                <b-row>
                    <b-col md="4" class="ml-auto text-left">
                        <slot name="h2text"></slot>
                    </b-col>
                    <b-col md="6" class="mr-auto text-left">
                        <div class="text-dark">
                            <slot name="paratext"></slot>
                        </div>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
    </b-col>
</template>

<script>
    export default {
    }
</script>
