<template>
  <div>
    <div class="index-main-bg position-absolute h-100 w-100" />
    <div class="index-main-wave-container position-absolute h-100 w-100 overflow-hidden">
      <div class="index-main-wave left-top position-absolute" />
      <div class="index-main-wave right-bottom position-absolute" />
    </div>
    <div class="v-center rtl">
      <b-container>
        <b-row
          v-if="data.questions && data.questions.length !== 0"
          class="mb-3 carousel-navigator-container justify-content-center text-center"
        >
          <b-col
            v-for="(card, index) in data.questions"
            :key="index"
            cols="auto"
          >
            <div class="carousel-navigator" />
          </b-col>
        </b-row>

        <b-row
          v-for="(question, index) in data.questions"
          :key="index"
          class="justify-content-center"
        >
          <b-col cols="10" lg="8" xl="6">
            <b-card class="border-0 rounded-expanded position-relative index-question-wrapper">
              <b-card class="border-0 index-top-header shadow-large text-center">
                {{ question.title }}
              </b-card>
              <div class="p-md-4 pt-4 pb-2">
                <div class="text-center d-flex justify-content-center">
                  <div>
                    <b-img :src="question.sliderMaxImg" class="mb-3" height="66" />
                    <div>
                      {{ question.sliderMaxText }}
                    </div>
                  </div>
                  <div class="d-flex align-items-center flex-grow-1 px-4 pb-4">
                    <vue-slider
                      v-model="question.sliderVal"
                      class="w-100"
                      :min="question.sliderMinValue"
                      :max="question.sliderMaxValue"
                      :interval="question.sliderInterval"
                      :tooltip="'none'"
                    />
                  </div>
                  <div>
                    <b-img :src="question.sliderMinImg" class="mb-3" height="66" />
                    <div>
                      {{ question.sliderMinText }}
                    </div>
                  </div>
                </div>
              </div>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
  export default {
    data: () => ({
      data: {
        question: 0,
        questions: [
          {
            title: 'چقدر از کیفیت خدمات ما راضی هستید؟',
            sliderMinText: 'معمولی',
            sliderMaxText: 'زیاد',
            sliderMaxImg: '/img/slider2.png',
            sliderMinImg: '/img/slider1.png',
            sliderMinValue: 0,
            sliderMaxValue: 5,
            sliderInterval: 1,
            sliderVal: 0
          }
        ]
      }
    }),
    watch: {
      '$route'() {
        this.slideToQuestion();
      }
    },
    methods: {
      slideToQuestion() {
        const { q: questionNo } = this.$route.query;
        this.data.question = questionNo;
      }
    }
  };
</script>

<style scoped lang="scss">
  @import "../assets/scss/dep";

  $question-top: -54px;

  .index-main-bg {
    z-index: -2;
    background: url('/img/bg.png') center center no-repeat;
    background-size: cover;
  }

  .carousel-navigator-container {
    @include transform(translateY(#{$question-top - 20px}));

    .carousel-navigator {
      width: 40px;
      height: 3px;
      background-color: white;
    }
  }

  .index-main-wave-container {
    .index-main-wave {
      width: 50%;
      height: 30%;
      z-index: -1;
      background: url('/img/waves.png') center center no-repeat;
      background-size: contain;

      &.left-top {
        top: -4%;
        left: -10%;
        @include transform(rotate(180deg));
      }

      &.right-bottom {
        right: -10%;
        bottom: -4%;
        @include opacity(0.7)
      }
    }
  }

  .index-question-wrapper {
    &.rounded-expanded {
      @include border-radius(0 0 20px 20px !important);
    }

    .index-top-header {
      left: -5%;
      right: -5%;
      width: 110%;
      top: $question-top;
      position: absolute;
      @include border-radius(64px !important);

      &.shadow-large {
        @include box-shadow(0 0 20px rgba(#22264C, 0.15))
      }
    }
  }
</style>
