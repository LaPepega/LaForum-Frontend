export class PostData {
    nickname: string;
    text: string;
    id: number | undefined;

    constructor(nickname:string, text:string, id?:number) {
        this.nickname = nickname;
        this.text = text;
        this.id = id;
    }

    public async sendCreateRequest(url:string = "/api/createPost") {
        let response = await fetch(url,
            {
                method: "POST",
                body: JSON.stringify(Object.assign({},this)),
                headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' }
            }
        )

        if (!response.ok) {
            alert("Something went wrong while posting")
            return;
        }

        let json = await response.json()
        this.id = json.id
    }
}