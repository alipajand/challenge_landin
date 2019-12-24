<template>
  <div>
    <errors :error="{statusCode: 404}" />
  </div>
</template>
<script>
    import errors from '~/components/shared/Errors';

    export default {
        components: {
            errors
        },
        fetch({ redirect }) {
            return redirect({ name: 'error-id', params: { id: '404' } });
        }
    };
</script>
