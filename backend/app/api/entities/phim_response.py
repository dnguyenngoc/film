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
