import {View, Text} from "react-native"
import {CLOUD_VISION_API_KEY, API_KEY, API_URL} from "@env"
import { Button } from "@rneui/base"
import ImagePicker from 'react-native-image-crop-picker';

const isTest = true

const mockResponseJSON = [
    {
        "textAnnotations": [
            {
                "locale": "fy",
                "description": "Mangfve Amep Ai\nMantequilla Larpak con ac\n02.01.2023 B1D 08 36",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 65,
                            "y": 18
                        },
                        {
                            "x": 149,
                            "y": 18
                        },
                        {
                            "x": 149,
                            "y": 40
                        },
                        {
                            "x": 65,
                            "y": 40
                        }
                    ]
                }
            },
            {
                "description": "Mangfve",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 92,
                            "y": 18
                        },
                        {
                            "x": 118,
                            "y": 18
                        },
                        {
                            "x": 118,
                            "y": 25
                        },
                        {
                            "x": 92,
                            "y": 25
                        }
                    ]
                }
            },
            {
                "description": "Amep",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 120,
                            "y": 18
                        },
                        {
                            "x": 135,
                            "y": 18
                        },
                        {
                            "x": 135,
                            "y": 25
                        },
                        {
                            "x": 120,
                            "y": 25
                        }
                    ]
                }
            },
            {
                "description": "Ai",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 137,
                            "y": 18
                        },
                        {
                            "x": 147,
                            "y": 18
                        },
                        {
                            "x": 147,
                            "y": 25
                        },
                        {
                            "x": 137,
                            "y": 25
                        }
                    ]
                }
            },
            {
                "description": "Mantequilla",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 87,
                            "y": 24
                        },
                        {
                            "x": 114,
                            "y": 24
                        },
                        {
                            "x": 114,
                            "y": 30
                        },
                        {
                            "x": 87,
                            "y": 30
                        }
                    ]
                }
            },
            {
                "description": "Larpak",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 115,
                            "y": 24
                        },
                        {
                            "x": 130,
                            "y": 24
                        },
                        {
                            "x": 130,
                            "y": 30
                        },
                        {
                            "x": 115,
                            "y": 30
                        }
                    ]
                }
            },
            {
                "description": "con",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 135,
                            "y": 24
                        },
                        {
                            "x": 143,
                            "y": 24
                        },
                        {
                            "x": 143,
                            "y": 30
                        },
                        {
                            "x": 135,
                            "y": 30
                        }
                    ]
                }
            },
            {
                "description": "ac",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 144,
                            "y": 24
                        },
                        {
                            "x": 149,
                            "y": 24
                        },
                        {
                            "x": 149,
                            "y": 30
                        },
                        {
                            "x": 144,
                            "y": 30
                        }
                    ]
                }
            },
            {
                "description": "02.01.2023",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 65,
                            "y": 36
                        },
                        {
                            "x": 103,
                            "y": 36
                        },
                        {
                            "x": 103,
                            "y": 40
                        },
                        {
                            "x": 65,
                            "y": 40
                        }
                    ]
                }
            },
            {
                "description": "B1D",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 110,
                            "y": 36
                        },
                        {
                            "x": 122,
                            "y": 36
                        },
                        {
                            "x": 122,
                            "y": 40
                        },
                        {
                            "x": 110,
                            "y": 40
                        }
                    ]
                }
            },
            {
                "description": "08",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 130,
                            "y": 36
                        },
                        {
                            "x": 136,
                            "y": 36
                        },
                        {
                            "x": 136,
                            "y": 40
                        },
                        {
                            "x": 130,
                            "y": 40
                        }
                    ]
                }
            },
            {
                "description": "36",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 142,
                            "y": 36
                        },
                        {
                            "x": 147,
                            "y": 36
                        },
                        {
                            "x": 147,
                            "y": 40
                        },
                        {
                            "x": 142,
                            "y": 40
                        }
                    ]
                }
            }
        ],
        "fullTextAnnotation": {
            "pages": [
                {
                    "property": {
                        "detectedLanguages": [
                            {
                                "languageCode": "fy",
                                "confidence": 0.44568354
                            },
                            {
                                "languageCode": "qu",
                                "confidence": 0.42728153
                            },
                            {
                                "languageCode": "hmn",
                                "confidence": 0.12703493
                            }
                        ]
                    },
                    "width": 150,
                    "height": 99,
                    "blocks": [
                        {
                            "boundingBox": {
                                "vertices": [
                                    {
                                        "x": 65,
                                        "y": 18
                                    },
                                    {
                                        "x": 149,
                                        "y": 18
                                    },
                                    {
                                        "x": 149,
                                        "y": 40
                                    },
                                    {
                                        "x": 65,
                                        "y": 40
                                    }
                                ]
                            },
                            "paragraphs": [
                                {
                                    "boundingBox": {
                                        "vertices": [
                                            {
                                                "x": 87,
                                                "y": 18
                                            },
                                            {
                                                "x": 149,
                                                "y": 18
                                            },
                                            {
                                                "x": 149,
                                                "y": 30
                                            },
                                            {
                                                "x": 87,
                                                "y": 30
                                            }
                                        ]
                                    },
                                    "words": [
                                        {
                                            "property": {
                                                "detectedLanguages": [
                                                    {
                                                        "languageCode": "hmn",
                                                        "confidence": 1
                                                    }
                                                ]
                                            },
                                            "boundingBox": {
                                                "vertices": [
                                                    {
                                                        "x": 92,
                                                        "y": 18
                                                    },
                                                    {
                                                        "x": 118,
                                                        "y": 18
                                                    },
                                                    {
                                                        "x": 118,
                                                        "y": 25
                                                    },
                                                    {
                                                        "x": 92,
                                                        "y": 25
                                                    }
                                                ]
                                            },
                                            "symbols": [
                                                {
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 92,
                                                                "y": 18
                                                            },
                                                            {
                                                                "x": 101,
                                                                "y": 18
                                                            },
                                                            {
                                                                "x": 101,
                                                                "y": 25
                                                            },
                                                            {
                                                                "x": 92,
                                                                "y": 25
                                                            }
                                                        ]
                                                    },
                                                    "text": "M"
                                                },
                                                {
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 103,
                                                                "y": 18
                                                            },
                                                            {
                                                                "x": 104,
                                                                "y": 18
                                                            },
                                                            {
                                                                "x": 104,
                                                                "y": 25
                                                            },
                                                            {
                                                                "x": 103,
                                                                "y": 25
                                                            }
                                                        ]
                                                    },
                                                    "text": "a"
                                                },
                                                {
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 105,
                                                                "y": 18
                                                            },
                                                            {
                                                                "x": 106,
                                                                "y": 18
                                                            },
                                                            {
                                                                "x": 106,
                                                                "y": 25
                                                            },
                                                            {
                                                                "x": 105,
                                                                "y": 25
                                                            }
                                                        ]
                                                    },
                                                    "text": "n"
                                                },
                                                {
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 108,
                                                                "y": 18
                                                            },
                                                            {
                                                                "x": 109,
                                                                "y": 18
                                                            },
                                                            {
                                                                "x": 109,
                                                                "y": 25
                                                            },
                                                            {
                                                                "x": 108,
                                                                "y": 25
                                                            }
                                                        ]
                                                    },
                                                    "text": "g"
                                                },
                                                {
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 110,
                                                                "y": 18
                                                            },
                                                            {
                                                                "x": 111,
                                                                "y": 18
                                                            },
                                                            {
                                                                "x": 111,
                                                                "y": 25
                                                            },
                                                            {
                                                                "x": 110,
                                                                "y": 25
                                                            }
                                                        ]
                                                    },
                                                    "text": "f"
                                                },
                                                {
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 112,
                                                                "y": 18
                                                            },
                                                            {
                                                                "x": 113,
                                                                "y": 18
                                                            },
                                                            {
                                                                "x": 113,
                                                                "y": 25
                                                            },
                                                            {
                                                                "x": 112,
                                                                "y": 25
                                                            }
                                                        ]
                                                    },
                                                    "text": "v"
                                                },
                                                {
                                                    "property": {
                                                        "detectedBreak": {
                                                            "type": "SPACE"
                                                        }
                                                    },
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 115,
                                                                "y": 18
                                                            },
                                                            {
                                                                "x": 118,
                                                                "y": 18
                                                            },
                                                            {
                                                                "x": 118,
                                                                "y": 25
                                                            },
                                                            {
                                                                "x": 115,
                                                                "y": 25
                                                            }
                                                        ]
                                                    },
                                                    "text": "e"
                                                }
                                            ]
                                        },
                                        {
                                            "property": {
                                                "detectedLanguages": [
                                                    {
                                                        "languageCode": "hmn",
                                                        "confidence": 1
                                                    }
                                                ]
                                            },
                                            "boundingBox": {
                                                "vertices": [
                                                    {
                                                        "x": 120,
                                                        "y": 18
                                                    },
                                                    {
                                                        "x": 135,
                                                        "y": 18
                                                    },
                                                    {
                                                        "x": 135,
                                                        "y": 25
                                                    },
                                                    {
                                                        "x": 120,
                                                        "y": 25
                                                    }
                                                ]
                                            },
                                            "symbols": [
                                                {
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 120,
                                                                "y": 18
                                                            },
                                                            {
                                                                "x": 121,
                                                                "y": 18
                                                            },
                                                            {
                                                                "x": 121,
                                                                "y": 25
                                                            },
                                                            {
                                                                "x": 120,
                                                                "y": 25
                                                            }
                                                        ]
                                                    },
                                                    "text": "A"
                                                },
                                                {
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 123,
                                                                "y": 18
                                                            },
                                                            {
                                                                "x": 125,
                                                                "y": 18
                                                            },
                                                            {
                                                                "x": 125,
                                                                "y": 25
                                                            },
                                                            {
                                                                "x": 123,
                                                                "y": 25
                                                            }
                                                        ]
                                                    },
                                                    "text": "m"
                                                },
                                                {
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 126,
                                                                "y": 18
                                                            },
                                                            {
                                                                "x": 127,
                                                                "y": 18
                                                            },
                                                            {
                                                                "x": 127,
                                                                "y": 25
                                                            },
                                                            {
                                                                "x": 126,
                                                                "y": 25
                                                            }
                                                        ]
                                                    },
                                                    "text": "e"
                                                },
                                                {
                                                    "property": {
                                                        "detectedBreak": {
                                                            "type": "SPACE"
                                                        }
                                                    },
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 129,
                                                                "y": 18
                                                            },
                                                            {
                                                                "x": 135,
                                                                "y": 18
                                                            },
                                                            {
                                                                "x": 135,
                                                                "y": 25
                                                            },
                                                            {
                                                                "x": 129,
                                                                "y": 25
                                                            }
                                                        ]
                                                    },
                                                    "text": "p"
                                                }
                                            ]
                                        },
                                        {
                                            "property": {
                                                "detectedLanguages": [
                                                    {
                                                        "languageCode": "hmn",
                                                        "confidence": 1
                                                    }
                                                ]
                                            },
                                            "boundingBox": {
                                                "vertices": [
                                                    {
                                                        "x": 137,
                                                        "y": 18
                                                    },
                                                    {
                                                        "x": 147,
                                                        "y": 18
                                                    },
                                                    {
                                                        "x": 147,
                                                        "y": 25
                                                    },
                                                    {
                                                        "x": 137,
                                                        "y": 25
                                                    }
                                                ]
                                            },
                                            "symbols": [
                                                {
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 137,
                                                                "y": 18
                                                            },
                                                            {
                                                                "x": 140,
                                                                "y": 18
                                                            },
                                                            {
                                                                "x": 140,
                                                                "y": 25
                                                            },
                                                            {
                                                                "x": 137,
                                                                "y": 25
                                                            }
                                                        ]
                                                    },
                                                    "text": "A"
                                                },
                                                {
                                                    "property": {
                                                        "detectedBreak": {
                                                            "type": "EOL_SURE_SPACE"
                                                        }
                                                    },
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 143,
                                                                "y": 18
                                                            },
                                                            {
                                                                "x": 147,
                                                                "y": 18
                                                            },
                                                            {
                                                                "x": 147,
                                                                "y": 25
                                                            },
                                                            {
                                                                "x": 143,
                                                                "y": 25
                                                            }
                                                        ]
                                                    },
                                                    "text": "i"
                                                }
                                            ]
                                        },
                                        {
                                            "property": {
                                                "detectedLanguages": [
                                                    {
                                                        "languageCode": "qu",
                                                        "confidence": 1
                                                    }
                                                ]
                                            },
                                            "boundingBox": {
                                                "vertices": [
                                                    {
                                                        "x": 87,
                                                        "y": 24
                                                    },
                                                    {
                                                        "x": 114,
                                                        "y": 24
                                                    },
                                                    {
                                                        "x": 114,
                                                        "y": 30
                                                    },
                                                    {
                                                        "x": 87,
                                                        "y": 30
                                                    }
                                                ]
                                            },
                                            "symbols": [
                                                {
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 87,
                                                                "y": 24
                                                            },
                                                            {
                                                                "x": 91,
                                                                "y": 24
                                                            },
                                                            {
                                                                "x": 91,
                                                                "y": 30
                                                            },
                                                            {
                                                                "x": 87,
                                                                "y": 30
                                                            }
                                                        ]
                                                    },
                                                    "text": "M"
                                                },
                                                {
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 91,
                                                                "y": 24
                                                            },
                                                            {
                                                                "x": 94,
                                                                "y": 24
                                                            },
                                                            {
                                                                "x": 94,
                                                                "y": 30
                                                            },
                                                            {
                                                                "x": 91,
                                                                "y": 30
                                                            }
                                                        ]
                                                    },
                                                    "text": "a"
                                                },
                                                {
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 93,
                                                                "y": 24
                                                            },
                                                            {
                                                                "x": 96,
                                                                "y": 24
                                                            },
                                                            {
                                                                "x": 96,
                                                                "y": 30
                                                            },
                                                            {
                                                                "x": 93,
                                                                "y": 30
                                                            }
                                                        ]
                                                    },
                                                    "text": "n"
                                                },
                                                {
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 96,
                                                                "y": 24
                                                            },
                                                            {
                                                                "x": 98,
                                                                "y": 24
                                                            },
                                                            {
                                                                "x": 98,
                                                                "y": 30
                                                            },
                                                            {
                                                                "x": 96,
                                                                "y": 30
                                                            }
                                                        ]
                                                    },
                                                    "text": "t"
                                                },
                                                {
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 98,
                                                                "y": 24
                                                            },
                                                            {
                                                                "x": 101,
                                                                "y": 24
                                                            },
                                                            {
                                                                "x": 101,
                                                                "y": 30
                                                            },
                                                            {
                                                                "x": 98,
                                                                "y": 30
                                                            }
                                                        ]
                                                    },
                                                    "text": "e"
                                                },
                                                {
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 101,
                                                                "y": 24
                                                            },
                                                            {
                                                                "x": 104,
                                                                "y": 24
                                                            },
                                                            {
                                                                "x": 104,
                                                                "y": 30
                                                            },
                                                            {
                                                                "x": 101,
                                                                "y": 30
                                                            }
                                                        ]
                                                    },
                                                    "text": "q"
                                                },
                                                {
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 104,
                                                                "y": 24
                                                            },
                                                            {
                                                                "x": 107,
                                                                "y": 24
                                                            },
                                                            {
                                                                "x": 107,
                                                                "y": 30
                                                            },
                                                            {
                                                                "x": 104,
                                                                "y": 30
                                                            }
                                                        ]
                                                    },
                                                    "text": "u"
                                                },
                                                {
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 105,
                                                                "y": 24
                                                            },
                                                            {
                                                                "x": 108,
                                                                "y": 24
                                                            },
                                                            {
                                                                "x": 108,
                                                                "y": 30
                                                            },
                                                            {
                                                                "x": 105,
                                                                "y": 30
                                                            }
                                                        ]
                                                    },
                                                    "text": "i"
                                                },
                                                {
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 106,
                                                                "y": 24
                                                            },
                                                            {
                                                                "x": 109,
                                                                "y": 24
                                                            },
                                                            {
                                                                "x": 109,
                                                                "y": 30
                                                            },
                                                            {
                                                                "x": 106,
                                                                "y": 30
                                                            }
                                                        ]
                                                    },
                                                    "text": "l"
                                                },
                                                {
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 109,
                                                                "y": 24
                                                            },
                                                            {
                                                                "x": 112,
                                                                "y": 24
                                                            },
                                                            {
                                                                "x": 112,
                                                                "y": 30
                                                            },
                                                            {
                                                                "x": 109,
                                                                "y": 30
                                                            }
                                                        ]
                                                    },
                                                    "text": "l"
                                                },
                                                {
                                                    "property": {
                                                        "detectedBreak": {
                                                            "type": "SPACE"
                                                        }
                                                    },
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 111,
                                                                "y": 24
                                                            },
                                                            {
                                                                "x": 114,
                                                                "y": 24
                                                            },
                                                            {
                                                                "x": 114,
                                                                "y": 30
                                                            },
                                                            {
                                                                "x": 111,
                                                                "y": 30
                                                            }
                                                        ]
                                                    },
                                                    "text": "a"
                                                }
                                            ]
                                        },
                                        {
                                            "property": {
                                                "detectedLanguages": [
                                                    {
                                                        "languageCode": "qu",
                                                        "confidence": 1
                                                    }
                                                ]
                                            },
                                            "boundingBox": {
                                                "vertices": [
                                                    {
                                                        "x": 115,
                                                        "y": 24
                                                    },
                                                    {
                                                        "x": 130,
                                                        "y": 24
                                                    },
                                                    {
                                                        "x": 130,
                                                        "y": 30
                                                    },
                                                    {
                                                        "x": 115,
                                                        "y": 30
                                                    }
                                                ]
                                            },
                                            "symbols": [
                                                {
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 115,
                                                                "y": 24
                                                            },
                                                            {
                                                                "x": 117,
                                                                "y": 24
                                                            },
                                                            {
                                                                "x": 117,
                                                                "y": 30
                                                            },
                                                            {
                                                                "x": 115,
                                                                "y": 30
                                                            }
                                                        ]
                                                    },
                                                    "text": "L"
                                                },
                                                {
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 117,
                                                                "y": 24
                                                            },
                                                            {
                                                                "x": 120,
                                                                "y": 24
                                                            },
                                                            {
                                                                "x": 120,
                                                                "y": 30
                                                            },
                                                            {
                                                                "x": 117,
                                                                "y": 30
                                                            }
                                                        ]
                                                    },
                                                    "text": "a"
                                                },
                                                {
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 120,
                                                                "y": 24
                                                            },
                                                            {
                                                                "x": 122,
                                                                "y": 24
                                                            },
                                                            {
                                                                "x": 122,
                                                                "y": 30
                                                            },
                                                            {
                                                                "x": 120,
                                                                "y": 30
                                                            }
                                                        ]
                                                    },
                                                    "text": "r"
                                                },
                                                {
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 122,
                                                                "y": 24
                                                            },
                                                            {
                                                                "x": 125,
                                                                "y": 24
                                                            },
                                                            {
                                                                "x": 125,
                                                                "y": 30
                                                            },
                                                            {
                                                                "x": 122,
                                                                "y": 30
                                                            }
                                                        ]
                                                    },
                                                    "text": "p"
                                                },
                                                {
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 125,
                                                                "y": 24
                                                            },
                                                            {
                                                                "x": 128,
                                                                "y": 24
                                                            },
                                                            {
                                                                "x": 128,
                                                                "y": 30
                                                            },
                                                            {
                                                                "x": 125,
                                                                "y": 30
                                                            }
                                                        ]
                                                    },
                                                    "text": "a"
                                                },
                                                {
                                                    "property": {
                                                        "detectedBreak": {
                                                            "type": "SPACE"
                                                        }
                                                    },
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 127,
                                                                "y": 24
                                                            },
                                                            {
                                                                "x": 130,
                                                                "y": 24
                                                            },
                                                            {
                                                                "x": 130,
                                                                "y": 30
                                                            },
                                                            {
                                                                "x": 127,
                                                                "y": 30
                                                            }
                                                        ]
                                                    },
                                                    "text": "k"
                                                }
                                            ]
                                        },
                                        {
                                            "property": {
                                                "detectedLanguages": [
                                                    {
                                                        "languageCode": "qu",
                                                        "confidence": 1
                                                    }
                                                ]
                                            },
                                            "boundingBox": {
                                                "vertices": [
                                                    {
                                                        "x": 135,
                                                        "y": 24
                                                    },
                                                    {
                                                        "x": 143,
                                                        "y": 24
                                                    },
                                                    {
                                                        "x": 143,
                                                        "y": 30
                                                    },
                                                    {
                                                        "x": 135,
                                                        "y": 30
                                                    }
                                                ]
                                            },
                                            "symbols": [
                                                {
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 135,
                                                                "y": 24
                                                            },
                                                            {
                                                                "x": 137,
                                                                "y": 24
                                                            },
                                                            {
                                                                "x": 137,
                                                                "y": 30
                                                            },
                                                            {
                                                                "x": 135,
                                                                "y": 30
                                                            }
                                                        ]
                                                    },
                                                    "text": "c"
                                                },
                                                {
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 137,
                                                                "y": 24
                                                            },
                                                            {
                                                                "x": 140,
                                                                "y": 24
                                                            },
                                                            {
                                                                "x": 140,
                                                                "y": 30
                                                            },
                                                            {
                                                                "x": 137,
                                                                "y": 30
                                                            }
                                                        ]
                                                    },
                                                    "text": "o"
                                                },
                                                {
                                                    "property": {
                                                        "detectedBreak": {
                                                            "type": "SPACE"
                                                        }
                                                    },
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 140,
                                                                "y": 24
                                                            },
                                                            {
                                                                "x": 143,
                                                                "y": 24
                                                            },
                                                            {
                                                                "x": 143,
                                                                "y": 30
                                                            },
                                                            {
                                                                "x": 140,
                                                                "y": 30
                                                            }
                                                        ]
                                                    },
                                                    "text": "n"
                                                }
                                            ]
                                        },
                                        {
                                            "property": {
                                                "detectedLanguages": [
                                                    {
                                                        "languageCode": "qu",
                                                        "confidence": 1
                                                    }
                                                ]
                                            },
                                            "boundingBox": {
                                                "vertices": [
                                                    {
                                                        "x": 144,
                                                        "y": 24
                                                    },
                                                    {
                                                        "x": 149,
                                                        "y": 24
                                                    },
                                                    {
                                                        "x": 149,
                                                        "y": 30
                                                    },
                                                    {
                                                        "x": 144,
                                                        "y": 30
                                                    }
                                                ]
                                            },
                                            "symbols": [
                                                {
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 144,
                                                                "y": 24
                                                            },
                                                            {
                                                                "x": 147,
                                                                "y": 24
                                                            },
                                                            {
                                                                "x": 147,
                                                                "y": 30
                                                            },
                                                            {
                                                                "x": 144,
                                                                "y": 30
                                                            }
                                                        ]
                                                    },
                                                    "text": "a"
                                                },
                                                {
                                                    "property": {
                                                        "detectedBreak": {
                                                            "type": "LINE_BREAK"
                                                        }
                                                    },
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 147,
                                                                "y": 24
                                                            },
                                                            {
                                                                "x": 149,
                                                                "y": 24
                                                            },
                                                            {
                                                                "x": 149,
                                                                "y": 30
                                                            },
                                                            {
                                                                "x": 147,
                                                                "y": 30
                                                            }
                                                        ]
                                                    },
                                                    "text": "c"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "boundingBox": {
                                        "vertices": [
                                            {
                                                "x": 65,
                                                "y": 36
                                            },
                                            {
                                                "x": 147,
                                                "y": 36
                                            },
                                            {
                                                "x": 147,
                                                "y": 40
                                            },
                                            {
                                                "x": 65,
                                                "y": 40
                                            }
                                        ]
                                    },
                                    "words": [
                                        {
                                            "property": {
                                                "detectedLanguages": [
                                                    {
                                                        "languageCode": "fy",
                                                        "confidence": 1
                                                    }
                                                ]
                                            },
                                            "boundingBox": {
                                                "vertices": [
                                                    {
                                                        "x": 65,
                                                        "y": 36
                                                    },
                                                    {
                                                        "x": 103,
                                                        "y": 36
                                                    },
                                                    {
                                                        "x": 103,
                                                        "y": 40
                                                    },
                                                    {
                                                        "x": 65,
                                                        "y": 40
                                                    }
                                                ]
                                            },
                                            "symbols": [
                                                {
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 65,
                                                                "y": 36
                                                            },
                                                            {
                                                                "x": 67,
                                                                "y": 36
                                                            },
                                                            {
                                                                "x": 67,
                                                                "y": 40
                                                            },
                                                            {
                                                                "x": 65,
                                                                "y": 40
                                                            }
                                                        ]
                                                    },
                                                    "text": "0"
                                                },
                                                {
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 68,
                                                                "y": 36
                                                            },
                                                            {
                                                                "x": 70,
                                                                "y": 36
                                                            },
                                                            {
                                                                "x": 70,
                                                                "y": 40
                                                            },
                                                            {
                                                                "x": 68,
                                                                "y": 40
                                                            }
                                                        ]
                                                    },
                                                    "text": "2"
                                                },
                                                {
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 72,
                                                                "y": 36
                                                            },
                                                            {
                                                                "x": 74,
                                                                "y": 36
                                                            },
                                                            {
                                                                "x": 74,
                                                                "y": 40
                                                            },
                                                            {
                                                                "x": 72,
                                                                "y": 40
                                                            }
                                                        ]
                                                    },
                                                    "text": "."
                                                },
                                                {
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 76,
                                                                "y": 36
                                                            },
                                                            {
                                                                "x": 78,
                                                                "y": 36
                                                            },
                                                            {
                                                                "x": 78,
                                                                "y": 40
                                                            },
                                                            {
                                                                "x": 76,
                                                                "y": 40
                                                            }
                                                        ]
                                                    },
                                                    "text": "0"
                                                },
                                                {
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 80,
                                                                "y": 36
                                                            },
                                                            {
                                                                "x": 82,
                                                                "y": 36
                                                            },
                                                            {
                                                                "x": 82,
                                                                "y": 40
                                                            },
                                                            {
                                                                "x": 80,
                                                                "y": 40
                                                            }
                                                        ]
                                                    },
                                                    "text": "1"
                                                },
                                                {
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 83,
                                                                "y": 36
                                                            },
                                                            {
                                                                "x": 85,
                                                                "y": 36
                                                            },
                                                            {
                                                                "x": 85,
                                                                "y": 40
                                                            },
                                                            {
                                                                "x": 83,
                                                                "y": 40
                                                            }
                                                        ]
                                                    },
                                                    "text": "."
                                                },
                                                {
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 88,
                                                                "y": 36
                                                            },
                                                            {
                                                                "x": 90,
                                                                "y": 36
                                                            },
                                                            {
                                                                "x": 90,
                                                                "y": 40
                                                            },
                                                            {
                                                                "x": 88,
                                                                "y": 40
                                                            }
                                                        ]
                                                    },
                                                    "text": "2"
                                                },
                                                {
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 92,
                                                                "y": 36
                                                            },
                                                            {
                                                                "x": 94,
                                                                "y": 36
                                                            },
                                                            {
                                                                "x": 94,
                                                                "y": 40
                                                            },
                                                            {
                                                                "x": 92,
                                                                "y": 40
                                                            }
                                                        ]
                                                    },
                                                    "text": "0"
                                                },
                                                {
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 96,
                                                                "y": 36
                                                            },
                                                            {
                                                                "x": 98,
                                                                "y": 36
                                                            },
                                                            {
                                                                "x": 98,
                                                                "y": 40
                                                            },
                                                            {
                                                                "x": 96,
                                                                "y": 40
                                                            }
                                                        ]
                                                    },
                                                    "text": "2"
                                                },
                                                {
                                                    "property": {
                                                        "detectedBreak": {
                                                            "type": "SPACE"
                                                        }
                                                    },
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 100,
                                                                "y": 36
                                                            },
                                                            {
                                                                "x": 103,
                                                                "y": 36
                                                            },
                                                            {
                                                                "x": 103,
                                                                "y": 40
                                                            },
                                                            {
                                                                "x": 100,
                                                                "y": 40
                                                            }
                                                        ]
                                                    },
                                                    "text": "3"
                                                }
                                            ]
                                        },
                                        {
                                            "property": {
                                                "detectedLanguages": [
                                                    {
                                                        "languageCode": "fy",
                                                        "confidence": 1
                                                    }
                                                ]
                                            },
                                            "boundingBox": {
                                                "vertices": [
                                                    {
                                                        "x": 110,
                                                        "y": 36
                                                    },
                                                    {
                                                        "x": 122,
                                                        "y": 36
                                                    },
                                                    {
                                                        "x": 122,
                                                        "y": 40
                                                    },
                                                    {
                                                        "x": 110,
                                                        "y": 40
                                                    }
                                                ]
                                            },
                                            "symbols": [
                                                {
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 110,
                                                                "y": 36
                                                            },
                                                            {
                                                                "x": 113,
                                                                "y": 36
                                                            },
                                                            {
                                                                "x": 113,
                                                                "y": 40
                                                            },
                                                            {
                                                                "x": 110,
                                                                "y": 40
                                                            }
                                                        ]
                                                    },
                                                    "text": "B"
                                                },
                                                {
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 115,
                                                                "y": 36
                                                            },
                                                            {
                                                                "x": 116,
                                                                "y": 36
                                                            },
                                                            {
                                                                "x": 116,
                                                                "y": 40
                                                            },
                                                            {
                                                                "x": 115,
                                                                "y": 40
                                                            }
                                                        ]
                                                    },
                                                    "text": "1"
                                                },
                                                {
                                                    "property": {
                                                        "detectedBreak": {
                                                            "type": "SPACE"
                                                        }
                                                    },
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 119,
                                                                "y": 36
                                                            },
                                                            {
                                                                "x": 122,
                                                                "y": 36
                                                            },
                                                            {
                                                                "x": 122,
                                                                "y": 40
                                                            },
                                                            {
                                                                "x": 119,
                                                                "y": 40
                                                            }
                                                        ]
                                                    },
                                                    "text": "D"
                                                }
                                            ]
                                        },
                                        {
                                            "property": {
                                                "detectedLanguages": [
                                                    {
                                                        "languageCode": "fy",
                                                        "confidence": 1
                                                    }
                                                ]
                                            },
                                            "boundingBox": {
                                                "vertices": [
                                                    {
                                                        "x": 130,
                                                        "y": 36
                                                    },
                                                    {
                                                        "x": 136,
                                                        "y": 36
                                                    },
                                                    {
                                                        "x": 136,
                                                        "y": 40
                                                    },
                                                    {
                                                        "x": 130,
                                                        "y": 40
                                                    }
                                                ]
                                            },
                                            "symbols": [
                                                {
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 130,
                                                                "y": 36
                                                            },
                                                            {
                                                                "x": 131,
                                                                "y": 36
                                                            },
                                                            {
                                                                "x": 131,
                                                                "y": 40
                                                            },
                                                            {
                                                                "x": 130,
                                                                "y": 40
                                                            }
                                                        ]
                                                    },
                                                    "text": "0"
                                                },
                                                {
                                                    "property": {
                                                        "detectedBreak": {
                                                            "type": "SPACE"
                                                        }
                                                    },
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 133,
                                                                "y": 36
                                                            },
                                                            {
                                                                "x": 136,
                                                                "y": 36
                                                            },
                                                            {
                                                                "x": 136,
                                                                "y": 40
                                                            },
                                                            {
                                                                "x": 133,
                                                                "y": 40
                                                            }
                                                        ]
                                                    },
                                                    "text": "8"
                                                }
                                            ]
                                        },
                                        {
                                            "property": {
                                                "detectedLanguages": [
                                                    {
                                                        "languageCode": "fy",
                                                        "confidence": 1
                                                    }
                                                ]
                                            },
                                            "boundingBox": {
                                                "vertices": [
                                                    {
                                                        "x": 142,
                                                        "y": 36
                                                    },
                                                    {
                                                        "x": 147,
                                                        "y": 36
                                                    },
                                                    {
                                                        "x": 147,
                                                        "y": 40
                                                    },
                                                    {
                                                        "x": 142,
                                                        "y": 40
                                                    }
                                                ]
                                            },
                                            "symbols": [
                                                {
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 142,
                                                                "y": 36
                                                            },
                                                            {
                                                                "x": 143,
                                                                "y": 36
                                                            },
                                                            {
                                                                "x": 143,
                                                                "y": 40
                                                            },
                                                            {
                                                                "x": 142,
                                                                "y": 40
                                                            }
                                                        ]
                                                    },
                                                    "text": "3"
                                                },
                                                {
                                                    "property": {
                                                        "detectedBreak": {
                                                            "type": "LINE_BREAK"
                                                        }
                                                    },
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 145,
                                                                "y": 36
                                                            },
                                                            {
                                                                "x": 147,
                                                                "y": 36
                                                            },
                                                            {
                                                                "x": 147,
                                                                "y": 40
                                                            },
                                                            {
                                                                "x": 145,
                                                                "y": 40
                                                            }
                                                        ]
                                                    },
                                                    "text": "6"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ],
                            "blockType": "TEXT"
                        }
                    ]
                }
            ],
            "text": "Mangfve Amep Ai\nMantequilla Larpak con ac\n02.01.2023 B1D 08 36"
        }
    }
]

const getImageInBase64 = async () => {
   let base64 = await ImagePicker.openPicker({
        width: 150,
        height: 100,
        cropping: true,
        includeBase64: true,
      }).then(image => image.data);
      
      return base64
}

function generateReqBody(image) {
    const body = {
      requests: [
        {
          image: {
            content: image,
          },
          features: [
            {
              type: 'TEXT_DETECTION', //we will use this API for text detection purposes.
              maxResults: 1,
            },
          ],
        },
      ],
    };
    return body;
  }

export async function callGoogleVisionAsync(image) {

    if (isTest){
        return mockResponseJSON
    }

    const body = generateReqBody(image); //pass in our image for the payload
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    const result = await response.json();
    console.log(result);
  }


const CloudVisionTab = () => {

    const handlePress = async () => {
        let image = await getImageInBase64()
        let test = await callGoogleVisionAsync(image)
        console.log({test})
    }
      
    return (<View>
        <Text>This is the cloud vision tab</Text>
        <Button onPress={()=>handlePress()} title={'Library select'}></Button>
    </View>)
}

export default CloudVisionTab;
