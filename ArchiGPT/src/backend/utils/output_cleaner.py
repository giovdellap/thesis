def cleanOutput(message, section):
    temp = ""
    if message[0] == "`":
        print('Project Cleaner activated for : ' + section, message)
        temp = message.replace("```json", "")
    else:
        temp = message
    temp2 = temp.replace("`", "")
    res = temp2.replace("json", "")
    return res