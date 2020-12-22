class PhimFetch:
    def __init__(
        self, 
        *kwargs,
        stt: int,
        quality: str = None,
        eng_name: str = None, 
        viet_name: str = None,
        time: str = None,
        url: str = None,
        thumbnail: str = None
    ):
        self.eng_name = eng_name
        self.viet_name = viet_name
        self.time = time
        self.url = url
        self.thumbnail = thumbnail
        self.stt = stt
        self.quality = quality



class filmDetail:
    def __init__(
        self, 
        *kwargs,
        id: str,
        name: str,
        year: int = None,
        country: str = None,
        director: str = None,
        type_film: str = None,
        style: list = None,
        languege: list = None,
        process: str = None,
        content: str = None,
        role: str = 'Free',
        star: float = None,
        view: int = None,
        actor: list = None,
        watch_url: str,
        trailer_url: str = None
    ):
        self.id = id
        self.name = name
        self.year = year
        self.country = country
        self.director = director
        self.type_film = type_film
        self.style = style
        self.languege = languege
        self.process = process
        self.content = content
        self.role = role
        self.star = star
        self.view = view
        self.actor = actor
        self.watch_url = watch_url
        self.trailer_url = trailer_url

