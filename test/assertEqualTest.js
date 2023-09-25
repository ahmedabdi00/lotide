const assertEqual = require('../assertEqual');

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("123", "123")   //Comparing identical strings
assertEqual("111", "222")   //Comparing non-identical strings
assertEqual(1000, 1000)     //Comparing identical numbers
assertEqual(2222, 3333)     //Comparing non-identical numbers