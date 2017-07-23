import {Person} from './model/Person';

global.app = function () {
    var tom = new Person('Tom', 'Roper');
    console.log(tom.fullName);
};
