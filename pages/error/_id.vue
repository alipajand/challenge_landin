<template>
  <div>
    <errors :error="{statusCode: $route.params.id}" />
  </div>
</template>
<script>
    import errors from '~/components/shared/Errors';

    export default {
        components: {
            errors
        }
    };
</script>
