using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UnityEngine.Networking;

namespace NiceTS
{
    public class HttpManager
    {

        public static async Task<string> Get(string url)
        {
            UnityWebRequest request = UnityWebRequest.Get(url);
            request.SendWebRequest();
            while (!request.isDone)
            {
                await Task.Delay(100);
            }
            if (request.isHttpError || request.isNetworkError)
            {
                return null;
            }
            string txt = request.downloadHandler.text;
            return txt;
        }

        public static async Task<string> Post(string url, string formdata)
        {
            List<IMultipartFormSection> data = new List<IMultipartFormSection>();
            data.Add(new MultipartFormDataSection(formdata));

            UnityWebRequest post = UnityWebRequest.Post(url, data);
            post.SendWebRequest();

            while (!post.isDone)
            {
                await Task.Delay(100);
            }
            if (post.isHttpError || post.isNetworkError)
            {
                return null;
            }
            string txt = post.downloadHandler.text;
            return txt;
        }


    }
}
