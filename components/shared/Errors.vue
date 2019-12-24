<template>
  <div class="text-center my-5 py-5 px-3">
    <b-row class="justify-content-center">
      <b-col md="6" lg="6">
        <b-card class="py-5 border-0">
          <h1 class="error-code text-primary mb-0 text-truncate">
            {{ errorCode }}
          </h1>
          <p class="error-text strong">
            {{ errorText }}
          </p>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script>
    export default {
        props: {
            error: {
                type: Object,
                default: () => {
                }
            }
        },
        data() {
            return {
                ping: null
            };
        },
        computed: {
            errorCode() {
                if (!this.error) {
                    return;
                }

                const status = Number(this.error.statusCode) || 404;
                const errors = [401, 403, 404, 410, 500, 503];
                if (errors.includes(status)) {
                    return status;
                }

                return 404;
            },
            errorText() {
                switch (this.errorCode) {
                    case 401:
                        return 'لطفا دوباره وارد سیستم شوید!';
                    case 403:
                        return 'شما اجازه دسترسی به این صفحه را ندارید!';
                    case 404:
                        return 'صفحه مورد نظر یافت نشد!';
                    case 410:
                        return 'حساب شما مسدود می باشد. لطفا با پشتیبانی تماس بگیرید!';
                    case 500:
                        return 'با عرض پوزش، سیستم موقتا از دسترس خارج است!';
                    case 503:
                        return 'با عرض پوزش، سایت در حال بروز رسانی است!';
                    default:
                        return this.error.message || 'متاسفانه خطایی رخ داده است!';
                }
            }
        }
    };
</script>

<style scoped lang="scss">
  @import '../../assets/scss/dep';

  .error-code {
    font-size: 100px;
    line-height: 1;
    font-family: $font-name-regular, 'Tahoma' !important;
  }

  .error-text {
    font-size: 22px;
  }
</style>
