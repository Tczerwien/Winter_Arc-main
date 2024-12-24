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
                }
            }
        }
    },
    methods: {
        fullName(firstName){
            return `${firstName} ${this.lastName.toUpperCase()}`
        }
    }
}).mount('#listNames')

setTimeout(() => {
    vm.names.person_2.firstName = 'Daniel';
}, 2000);