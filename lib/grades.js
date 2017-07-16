/**
 * Created by benjaminhuang on 7/15/17.
 */

var gradeBook = {
    _grades: [],
    addGrade: function (newGrade) {
        this._grades.push(newGrade);
    },
    getCountOfGrades: function () {
        return this._grades.length;
    },
    getAverage: function () {
        var sum = 0;
        for(var i=0; i<this._grades.length; i++){
            sum += this._grades[i];
        }
        return sum/this._grades.length;

    },
    reset: function () {
        this._grades = [];
    },
    getLetterGrade: function () {

        var average = this.getAverage();

        if(average >= 90){
           return "A";
        }else if( average >= 80){
            return "B";
        }else if (average >= 70){
            return "C";
        }else if(average >= 60){
            return "D";
        }else{
            return "F";
        }
    }

};

exports.book = gradeBook;