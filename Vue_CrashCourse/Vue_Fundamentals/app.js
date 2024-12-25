//Its most common to have one instace of Vue open
const vm = Vue.createApp({
    data(){
        return {
            lastName: 'Czerwien',
            names: {
                person_1: {
                    firstName: 'Teresa'
                }, 
                person_2: {
                    firstName: 'Thomas'
                },
                person_3: {
                    firstName: 'Daniel'
                }
            },
            url: 'https://www.google.com',
            rawURL: '<a href="https://x.com/home" target="_blank">X</a>',
            ages: {
                person_1: { age: 20 },
                person_2: { age: 21 },
                person_3: { age: 26 }
            },
        }
    },
    methods: {
        fullName(firstName){
            return `${firstName} ${this.lastName.toUpperCase()}`
        },
        increment(person){
            if (this.ages[person] && this.ages[person].age !== undefined) {
                this.ages[person].age++;
            }
        },
        decrement(person){
            if (this.ages[person] && this.ages[person].age !== undefined) {
                this.ages[person].age--;
            }
        },
        updateLastName(event){
            this.lastName = event.target.value;
        }
    }
}).mount('#listNames')



setTimeout(() => {
    vm.names.person_2.firstName = 'Daniel';
}, 2000);