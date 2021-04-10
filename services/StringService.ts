
export class StringService {

    private static stringService: StringService;

    reverseString(req: any, res: any) {
        let word = req.params.word;
        word = StringService.reverseWord(word);
        word = word.replace(/[aeiou]/g, StringService.uppercaseVowels);
        res.send({
            status: 'OK',
            data: word
        });
    }

    private static uppercaseVowels(orig: string): string {
        return orig.toUpperCase();
    }

    private static reverseWord(word: string): string {
        let newWord = word;
        const splitNewWord = newWord.split("");
        const reverseArray = splitNewWord.reverse();
        newWord = reverseArray.join("");
        return newWord;
    }

    public static getInstance() {
        if (!StringService.stringService) {
            StringService.stringService = new StringService();
        }
        return StringService.stringService;
    }
}
