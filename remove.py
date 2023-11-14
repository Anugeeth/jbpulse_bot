import yaml

with open('odr.yaml', 'r') as file:
    data = yaml.safe_load(file)

paths = data.get("paths", {})
exclude = []
for path, path_data in paths.items():    
    for method, method_data in path_data.items():
        
        tags = method_data.get("tags", [])
        if "Beckn Application Platform (BAP)" not in tags:
            print(path)
            exclude.append(path)
        else:
           data["paths"][path][method]["tags"] = ["Beckn Application Platform (BAP)"]

for ex in exclude:
    paths.pop(ex)

data["paths"] = paths

updated_yaml = yaml.dump(data, default_flow_style=False, sort_keys=False)

with open("odr_bap.yaml", "w") as file:
    file.write(updated_yaml)
