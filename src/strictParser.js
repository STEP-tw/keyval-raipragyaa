const Parser=require("./keyValueParser.js");
const strictParseInfoCreator=require("./parseInfoCreator.js").strict;

var StrictParser=function(listOfKeys,caseSesitivity=true) {
  Parser.call(this);
  let sanitisedListOfKeys=listOfKeys||[];
  this.parseInfoCreator=strictParseInfoCreator(sanitisedListOfKeys);
}

StrictParser.prototype=Object.create(Parser.prototype);
module.exports=StrictParser;
