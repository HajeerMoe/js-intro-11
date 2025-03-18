// this keyword refers to the current object of the template
// super keyword refers to the parent of current object of the template
class Engineer {
    constructor(fullname, major) {
        this.fullname = fullname
        this.major = major
    }
    build() {
        console.log('Engineer Builds')
    }
}

class SoftwareEngineer extends Engineer {
    constructor(fullname, major, companyName) {
        super(fullname, major)
        this.companyName = companyName
    }
}








const eng = new SoftwareEngineer('Jane Doe', 'Software Engineering', 'Microsoft')