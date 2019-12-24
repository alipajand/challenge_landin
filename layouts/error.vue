<template>
  <div>
    <errors :error="error" />
  </div>
</template>
<script>
    import errors from '~/components/shared/Errors';

    export default {
        components: {
            errors
        },
        layout: 'default',
        props: {
            error: {
                type: Object,
                default: () => {
                }
            }
        }
    };
</script>
