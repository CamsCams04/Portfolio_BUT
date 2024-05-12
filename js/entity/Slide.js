export default {
    props: {
        img1: String,
        img2: String,
        img3: String
    },

    setup(props) {
        const slideIndex = Vue.ref(1);
        const slides = Vue.ref([]);
        const dots = Vue.ref([]);
        let autoSlideInterval;

        function autoSlide(){
            plusSlides(1);
        }

        function startAutoSlide(){
            autoSlideInterval = setInterval(autoSlide, 10000);
        }

        function stopAutoSlide(){
            clearInterval(autoSlideInterval);
        }

        const plusSlides = (n) => {
            stopAutoSlide();
            startAutoSlide();
            if(slideIndex.value === 3 && n === 1){
                slideIndex.value = 1;
            }else if(slideIndex.value === 1 && n === -1){
                slideIndex.value = 3;
            }else{
                    slideIndex.value += n;
            }

        };

        const currentSlide = (n) => {
                slideIndex.value = n;
        };

        Vue.onMounted(startAutoSlide);

        Vue.onUnmounted(stopAutoSlide);

        return { slideIndex, slides, dots, plusSlides, currentSlide };
    },

    template: /*html*/ `
        <section class="sectionSlide" id="myApp">
            <div class="slide-container">
                <div v-show="slideIndex === 1" class="custom-slider fade">
                    <img class="slide-img" :src="img1" alt="Image 1">
                </div>
                <div v-show="slideIndex === 2" class="custom-slider fade">
                    <img class="slide-img" :src="img2" alt="Image 2">
                </div>
                <div v-show="slideIndex === 3" class="custom-slider fade">
                    <img class="slide-img" :src="img3" alt="Image 3">
                </div>
                <a class="prev" @click="plusSlides(-1)">❮</a>
                <a class="next" @click="plusSlides(1)">❯</a>
            </div>
            <div class="slide-dot">
                <span :class='{active: slideIndex === 1}' class="dot" @click="currentSlide(1)"></span>
                <span :class='{active: slideIndex === 2}' class="dot" @click="currentSlide(2)"></span>
                <span :class='{active: slideIndex === 3}' class="dot" @click="currentSlide(3)"></span>
            </div>
        </section>
    `
};