import { Service } from "typedi";

@Service()
export class StringService {

    reverseString(req: any, res: any) {
        let word = req.params.word;
        word = this.reverseWord(word);
        word = word.replace(/[aeiou]/g, this.uppercaseVowels);
        res.send({
            status: 'OK',
            data: word
        });
    }

    private uppercaseVowels(orig: string): string {
        return orig.toUpperCase();
    }

    private reverseWord(word: string): string {
        let newWord = word;
        const splitNewWord = newWord.split("");
        const reverseArray = splitNewWord.reverse();
        newWord = reverseArray.join("");
        return newWord;
    }
}
