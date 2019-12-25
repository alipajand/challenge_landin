<template>
  <div>
    <div class="v-center rtl">
      <b-container>
        <div
          v-if="data.questions && data.questions.length !== 0"
          class="mb-2 carousel-navigator-container justify-content-center text-center d-flex"
        >
          <div
            v-for="(card, index) in data.questions"
            :key="index"
            :class="index === data.question ? '' : 'deactive'"
            class="carousel-navigator-item p-2"
            @click="changeQuestion(index)"
          >
            <div class="carousel-navigator" />
          </div>
        </div>

        <b-row
          v-for="(question, index) in data.questions"
          :key="index"
          :class="index === data.question ? '' : 'opacity-0'"
          class="justify-content-center carousel-question-item"
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
                  <div class="d-flex align-items-center flex-grow-1 px-5 pb-4">
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
          },
          {
            title: 'چقدر از بنده راضی هستید؟',
            sliderMinText: 'معمولی',
            sliderMaxText: 'خیلی زیاد',
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
      $route: {
        immediate: true,
        handler: 'slideToQuestion'
      }
    },
    methods: {
      changeQuestion(index) {
        index = Number(index);

        if (index <= 0) {
          index = 0;
        } else if (index >= this.data.questions.length) {
          index = this.data.questions.length;
        }

        this.$router.push({
          name: 'index',
          query: { q: String(index) }
        });
      },
      slideToQuestion() {
        const { q: questionNo = 0 } = this.$route.query;

        let index = Number(questionNo);
        if (String(questionNo) >= String(this.data.questions.length)) {
          index = this.data.questions.length;
          this.changeQuestion(index);

          return;
        }

        this.data.question = Number(index);
      }
    }
  };
</script>

<style scoped lang="scss">
  @import "../assets/scss/dep";

  .carousel-question-item {
    @include opacity(1);
    @include transition(opacity 0.4s ease-in);

    &.opacity-0 {
      height: 0;
      @include opacity(0);
    }
  }

  .carousel-navigator-container {
    @include transform(translateY(#{$question-top - 20px}));

    .carousel-navigator-item {
      cursor: pointer;
      @include opacity(1);
      @include transition(all 0.4s ease-in);

      &.deactive {
        @include opacity(.5);
      }

      .carousel-navigator {
        width: 40px;
        height: 3px;
        background-color: white;
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
