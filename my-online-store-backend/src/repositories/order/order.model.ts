import { model, Schema } from 'mongoose';

const UserSchema = new Schema({
    "type": {
      "type": "String"
    },
    "data": {
      "result": {
        "type": "Boolean"
      },
      "view": {
        "type": {
          "type": "String"
        },
        "options": {
          "barcode": {
            "type": "Boolean"
          }
        }
      },
      "payment": {
        "id": {
          "type": "String"
        },
        "description": {
          "type": "String"
        },
        "operation": {
          "type": {
            "type": "String"
          }
        },
        "status": {
          "code": {
            "type": "Date"
          },
          "text": {
            "type": "String"
          },
          "message": {
            "type": "String"
          }
        },
        "total": {
          "type": "Number"
        },
        "currency": {
          "code": {
            "type": "String"
          },
          "text": {
            "type": "String"
          },
          "symbol": {
            "type": "String"
          }
        },
        "riskAnalysis": {
          "band": {
            "type": "String"
          },
          "level": {
            "type": "String"
          }
        },
        "created": {
          "type": "Date"
        },
        "updated": {
          "type": "Date"
        },
        "reference": {
          "type": "String"
        },
        "source": {
          "name": {
            "type": "String"
          },
          "type": {
            "type": "String"
          },
          "reference": {
            "type": "String"
          },
          "barcode": {
            "type": "String"
          },
          "url": {
            "type": "String"
          }
        }
      },
      "entity": {
        "name": {
          "type": "String"
        },
        "uid": {
          "type": "String"
        }
      },
      "customer": {
        "uid": {
          "type": "String"
        },
        "name": {
          "type": "String"
        },
        "phone": {
          "type": "String"
        },
        "identification": {
          "type": "String"
        },
        "email": {
          "type": "String"
        }
      },
      "user": {
        "name": {
          "type": "String"
        },
        "email": {
          "type": "String"
        }
      },
      "source": {
        "name": {
          "type": "String"
        },
        "type": {
          "type": "String"
        },
        "reference": {
          "type": "String"
        }
      },
      "checkout": {
        "uid": {
          "type": "String"
        }
      }
    }
});

const User = model('User', UserSchema);

export default User;


 