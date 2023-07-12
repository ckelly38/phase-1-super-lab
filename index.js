// Write your classes here
//NOT THE DATA STRUCTURE
class Tree{
    constructor(tp)
    {
        this.species = tp;
    }

    static definition()
    {
        return "A tree is a perennial plant with an elongated stem, or trunk, " +
            "supporting branches and leaves.";
    }
}

class Deciduous extends Tree{
    constructor(tp, nm)
    {
        super(tp);
        this.name = nm;
    }

    static definition(){
        return super.definition() + " Deciduous trees shed their leaves annually.";
    }
}

class Evergreen extends Tree{
    constructor(tp, nm)
    {
        super(tp);
        this.name = nm;
    }

    static definition(){
        return super.definition() + " Evergreens keep their leaves all year round.";
    }
}
