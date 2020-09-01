import os
from PIL import Image
import json
import numpy as np

galleries = [dI for dI in os.listdir('./') if os.path.isdir(os.path.join('./',dI))]
all = []
for gal in galleries:
    writefile = []
    onlyfiles = [f for f in os.listdir("./" + gal) if (os.path.isfile(os.path.join("./" + gal, f)) and f[-4:] == ".jpg")]
    for i in onlyfiles:
        im = Image.open(os.path.join("./" + gal, i))
        writefile.append({
            "src": os.path.join("/pics/gallery/" + gal, i),
            "width": im.size[0],
            "height": im.size[1]
        })
    with open(os.path.join("./"+gal, "ratios.json"), 'w') as file:
        json.dump(writefile, file)
    all = all + writefile

    print(writefile)

with open("./All/ratios.json", 'w') as file:
    np.random.shuffle(all)
    json.dump(all, file)
