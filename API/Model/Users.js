var mongoose = require("mongoose")

var usersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    pfp: {
        type: String,
        default: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAsJCQcJCQcJCQkJCwkJCQkJCQsJCwsMCwsLDA0QDBEODQ4MEhkSJRodJR0ZHxwpKRYlNzU2GioyPi0pMBk7IRP/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCAEOAPMDASIAAhEBAxEB/8QAHAABAQACAwEBAAAAAAAAAAAAAAEGBwQFCAID/8QAQhAAAgEDAQUFBAcFBQkAAAAAAAECAwQRBQYSITFRBxNBYXEUIpGhIzJCUmKBsRUzkqLBJCVDgvA0NURTY3PC0eH/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAXEQEBAQEAAAAAAAAAAAAAAAAAARFB/9oADAMBAAIRAxEAPwDNwAVkIUgFAAEKQoAAgApCgCFIBQABCkAFAAEKQoAhSAUAAAQAUAAAAABABSAAUEAApABSAACkAFIABQQAAABQQACkAFIABQQAAABQQAUAAAAAIUgFAAEKQoAhSACkKAIUgRQTiOPAGgAAoACoUhQBCkAoAAgAAoAAAACAoAgKQACgCAFAgKQACpZ+DfHl8TAtpdv4WM61lobp1rmGYVryaUqNKXJxoxfBtdXw9QMzvb/TNNpqtqN3Rtab4rvpYlJfgh9Z/AxO97SNnKDcbO2vbxp8Jvdt6b5ffzL5Gqbq8vL6tUuLyvVr16jbnUrTlOTzxxx8DjhcbDrdp9+2+40m0gvsupWrTf54wj8Y9pmtZzOw0+SzyXfR4fxf0MCAMbMtu0+k3i80hpfetLjl/lqx/qZNpu2eympONON5K2rS5Ur6PdZfJKNRNw+Zo0oMekk00mmnFrKaeU11TXAGj9B2t1vQpwhTquvZbyc7Wu24YzxdN84v0Zt3Rdc0zXbX2mzn70Go16E/31Fv76xyfgwldmAUCApAAKAIAAAKAAAAAEApAAKCAAUgADy8QdLtPrK0LR7m7g17ZWbtbDis9/NcZpP7qy/gEYpt5tXOjKvoOnVEnjd1KvTfHL/4eEl/O/y8DWJ9VJyqTlObcpTlKUpN5cpSeW2z5I1AABQAAAAAOfpOq32j3lG9s6jjUg8Si29ypB84TXRnAAHoPRtWtNbsKN/avCl7tWm/rUaqxvU2vmvU7A0vsVr0tI1WNGrNqy1BwoV0292FRv6Or+T4PyfkbpeVjPRMrPQgAFBAAAAFBABQABAUAQFIABQBACgQ1D2i6m7vWvYISbo6VTVu0nlO4n79SXThwj+Rt2dWFCnVuKn7u3p1Lib/AA0o77POl3c1Ly6u7qq26tzXq15tvjvVJOQWPwABFAAAAAAAAAABVnPB4ZvbZXVHq+iadcSlvV6UPZbnjx72jiOX6rD/ADNEGyey+9+k1nTpSeHTpXtKPnF93N/OJUrZQKQIAoAgAAAoAAAACACkAAoIAAAA6Xa24la7Na7VTw523s8Wnh5rzjS4P0b+BoY3N2iVu72YcP8An6ja0/4Yzqf0RpkLAAEUAAAAAAAAAAAyrYC59n2m0+OUlc0rq2ll4XvUnNfOKMVO12dr+z67oNXH1dQtov0nNQf6gb+BeKbXmyFYUEAUAAFBABQAAAAAhSAUAAQAAYR2mSxoelx+9qufTdoT/wDZqM252mRb0PS5Y4R1RpvpmhI1GFgACKAAAAAAAAAAAcvTZbmoaZP7t7ay+FWLOIcrTo71/psVzleWsfjUigPRXX1f6kL4yXhl/qQrCgAKgAAoAAAACApAAAAAAAHyAAxTtCt3X2ZqTSbdrfW1fhyxLepPP8Rpc9DavY/tPS9TsOG9c21WnTzyVRLeg/ikee5wnTlOE1iUJSjJdGnhoLHyACKAAAAAAAAAAAdxs1be169oVHDeb6jUljnu0n3r+SOnM57NtPdxrFzfyS7vT7aSi2n++r5gsPyW8Btrxb68QAVgAAUAAAAAUAAAAAIUgFAAEKQoDxT8TUG32hTsNTnqNCn/AGPUpyqycV7tK5/xIP1+svXyNvHGv7Gz1KzubG7pKpQuI7slycccVKL6rmgbjzqDJdo9k9V0KrOpuyuNOb+iuoR4RTfCNZLk+vgY1gjQAAAAAAAAAfrQt7i5rUre3pTq1qslGnTpRcpSb6JAfEISnKMIRlKc5KEIxTcpSbwkkuOWb12W0VaDpVvby3fa62bi8lHj9LNL3E+kV7vxfidHshsW9LnT1PVVCV+o5t6GVKNtvfab5OfyWfhnHNorNqkKQCgACAACgAAAAICgCApAAKAIAUCApAPmcYTjOE4qUJxcZRkspp+DT4GLapsHszqDlUoUqljVecytWu7b55dKeY/DBlZQNT3XZprVNv2S9s68PDvVUozx6JSj/MdTV2F2xpJtaa6iTx9DWoyb80t5P5G7ePVjj1YNaKeyG2EeD0a7y+ii/wBJHytk9rW/9zX35wS/Vm+OPVjj1YNaLjsbtjNpLR7lZ8ZypRXxlM59Ds82trNd5RtbdJrPfV1J48lSUjcnHqxx6sGtc2HZnRi4T1LUZzS4ypWUNxN9O8q5f8iM003Q9D0iG7p9lToyeFOq251ZrH2pzzL5nZcSg1ACgQFIABQBAAABQAAAAEAFIABQQACkAFIAAKfNRxpQnVqyjTpU03OpUlGFOK/FObS+Zi2o7e7J2DlClOtqFZZWLJKNHP8A3qmF8IsDKiqM3yWX44aNTX3aVrdVyjYWlnZwecSlF3FXyeanu5/ynQ3O1u1t1nvdYvknxxRqdyl5fRY4Bcb57mvjPdyx13Xgd1WfKDfojznPUdTqNyqXt3OT5uVeq385Hyry+XK6uF6Vqi/qDHo106q5wa9Vg+fh8jz7R1vXrdp0NU1CnjGNy5qpfDewdxa7ebX20lvXsbiK+zeUadTn+JJS+YMbqBrvT+021k4w1TTZU+tWwqbyz1dKs8/zmY6Zr2g6wv7vvaVSrx+hk+7uOH/Snx+GQjsyjDWeDWOeVyIBSAAUEAAAAUEAFAAAAACFIBQABAGflc3NlZUK13e14W9tRjvVKtTio+CilzbfgkEfsk3wXRvL4JJc22+Bhuv7e6RpcqltpqhqF4sxlNSxZ0ZdHOPGT9OHmYhtPtvfax3tjY95a6VnDinivdY4ZryXg/CP6mGBqR2ura/rus1N/ULyrVj9ijF7lCC6Qpx935HV5fEgIoAAAAAAABk+4VKlOUJwnKM4tOMotqSfVNcT4AGa6Jt/rVg4UNRbv7RYTdSWLmmuXu1Hzx0Zs/S9Y0jWaCr6dcxqxSXeU5YjWot+FSm3levLzPPZyrG/vdOuKV1ZV6lCvTfuzpvDx4xfVPxRUx6KIYnsxtlZ62qVleuFvqqTUYpYo3PnS6S6xb9Oiyz4BFAAEAAFAAAAACFIAAAAAuE1JtqMYpylKXCMYpZcpPp1A/C6urWwtrm9vKsaVtb05Tqzlx5coxXjJ8kv9LSm0+099tDcJvNGxoN+yWqfCK5d5Ua5yfj8DmbZ7US1y89mtZSjpdpJxpLP+0VFwdeXr9ny9TEQshkAEUAAAAAAAAAAAAAAAB9wnUhOM4ScZwkpQlF4cZJ5TTNt7HbX/taNLTNRlFajBJUa0ml7ZGK5Pw318zUJ90qlSlOnUpzlCpTmpwnBtSjJPKaaCY9IcctP5AxrZDaOnr1i4VnGOo2ipwuI5X0scYVePr4+fqZKVAAAAABQAAAAAhSAP/hgnaFtC7O2/YdnPFxeRjUv5RazTtnxjS65nzfkvMzS9vLbTrO81C5eKFpSlVmvGWPqwXm3hfmef9Rv7jU729v7mW9Wuq0q0+iy+EV5JYS9ARw8sAEaAAAAAAAAAAAAAAAAAAAAAHY6Rql1pGoWt9bt71Ka34eFWk2t6m/X/XI33ZXltqFpaXtrLfoXNKFSD8U39aMvNPKfoedMmxuzfWdyrc6JXn7tZTuLLef+Iku8pr1SyvNPqErZgAKigAAAAICgCApYrMorGctAa+7StW7q0sNGpSW/cyV7d45qlB7tKLw/F5f5GqzvdrdQ/aW0Gr14vNKnXla0ccu6t/ok164b/M6ILAAEUAAAAAAAAAAAAAAAAAAAAADlWF3WsLuzvaHCra1oVoee68uL8muDOKAPRtpc0r20s7yi06V1Qp14NdJrKX5H7GHdnmoe1aHK0lLM9OuJUfHPdVc1Yf8Akl6GYlZAUAAAAAAA4mpXXsOnare+NrZXVaOOe8qb3fng5ZjW3FaVDZfVnHnWdrbvj9mdZN/oBpGTcpOTbbk223zbfFshXzIRoAAAAAAAAAAAAAAAAAAAAAAAAAAGd9ml26esXlo3iF3ZTnj8dCSkvk5G2EaN2LrTo7T6FKP2686L81Vpzhx+JvLr6lSqAAgAAP/Z"
    }
})

var Users = new mongoose.model("Users", usersSchema)

module.exports = Users;