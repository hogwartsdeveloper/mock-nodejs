export class Visit {
    private static _id = -1;

    public static data = [
        {
            "Pk": 731716,
            "TimeIn": "2019-10-20T23:17:54.964526Z",
            "TimeOut": null,
            "UoSn": "71_00_05_17_013714",
            "EmplPk": 17442,
            "MtrPk": 20092,
            "Time": "2019-10-21T09:18:00.688781Z",
            "Charge": 63,
            "Ch4": 0,
            "IsCh4Corr": true,
            "Psn": {
                "Disp": 0.26,
                "EdgePk": 1111,
                "EdgeUID": 2221,
                "EdgeUid": 2221
            },
            "Bs": [],
            "UoMode": 2,
            "InSearch": false,
            "Call": false,
            "MainLight": true,
            "Exit": true,
            "FarMtr": false,
            "BsPk": 712
        },
        {
            "Pk": 731717,
            "TimeIn": "2019-10-20T23:17:54.964526Z",
            "TimeOut": null,
            "UoSn": "71_00_05_17_013714",
            "EmplPk": 17442,
            "MtrPk": 20092,
            "Time": "2019-10-21T09:18:00.688781Z",
            "Charge": 63,
            "Ch4": 0,
            "IsCh4Corr": true,
            "Psn": {
                "Disp": 0.80,
                "EdgePk": 1111,
                "EdgeUID": 2221,
                "EdgeUid": 2221
            },
            "Bs": [],
            "UoMode": 2,
            "InSearch": false,
            "Call": false,
            "MainLight": true,
            "Exit": true,
            "FarMtr": false,
            "BsPk": 677
        }];

    public static get id() {
        Visit._id = Visit._id == Visit.data.length - 1 ? 0 : Visit._id + 1;
        return Visit._id;
    }
}
